import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import XO from './xo/xo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <XO />
  </React.StrictMode>
);