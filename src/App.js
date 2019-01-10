// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Application
import Main from './Main';

const App = () => (
  <div>
    <Main />
  </div>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render((
  <App />
), wrapper) : null;
