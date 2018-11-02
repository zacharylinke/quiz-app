import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable no-unused-vars */
import $ from 'jquery';
import Popper from 'popper.js';
/* eslint-enable */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import quizAdmin from './reducers';
import App from './components/App';
/* eslint-disable no-unused-vars */
import style from './sass/admin.scss';
/* eslint-enable */

/* eslint-disable no-underscore-dangle */
const store = createStore(quizAdmin,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

library.add(faCircle, faCheckCircle);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('quiz-layout'),
);

