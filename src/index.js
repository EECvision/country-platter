import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CombineContextProvider from './states/combine-context';

ReactDOM.render(
  <React.StrictMode>
    <CombineContextProvider>
      <BrowserRouter basename="/country">
        <App />
      </BrowserRouter>
    </CombineContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
