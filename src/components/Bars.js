import React, {Component} from "react";
import * as d3 from "d3";

export default class Bars extends Component{



    componentDidMount() {
        fetch('https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json')
            .then(result => result.json())
            .then(res => {
                this.drawChart(res);
            });
    }

    drawChart(data) {
        const canvas = d3.select(this.refs.canvas);
        const width = 700;
        const height = 500;
        const margin = { top: 10, left: 70, bottom: 40, right: 10 };
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top - margin.bottom;

        const svg = canvas.append("svg");
        svg.attr("width", width);
        svg.attr("height", height);

        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.views)])
            .range([iheight, 0]);

        const x = d3.scaleBand()
            .domain(data.map(d => d.id))
            .range([0, iwidth])
            .padding(0.1);

        const bars = g.selectAll("rect").data(data);

        const rect = bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "steelblue")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.views))
            .attr("height", d => iheight - y(d.views))
            .attr("width", x.bandwidth())

        g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`);

        g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));
    }

    render() {
        return (<div ref="canvas">
        </div>
        );
    }


}