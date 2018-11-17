import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from './routes';

ReactDOM.render((
  <BrowserRouter>
    {renderRoutes()}
  </BrowserRouter>
), document.getElementById('root'))