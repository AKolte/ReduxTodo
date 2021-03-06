import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import * as bootstrap from 'react-bootstrap';
import {createStore} from 'redux';
import reducer from './reducer';
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
   <App>
   </App>
 
 </Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
