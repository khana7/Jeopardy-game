// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <BrowserRouter><App /></BrowserRouter>);



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

