// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Application
import Header from './Header';
import Main from './Main';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render((
  <App />
), wrapper) : null;
