import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages= {messages[language]}>
		<App />
  </IntlProvider>, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
