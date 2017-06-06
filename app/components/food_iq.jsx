import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from '../store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root></Root>, rootEl);
});