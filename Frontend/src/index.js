import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ConetextProvider from './component/context/ConetextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConetextProvider>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </ConetextProvider>
);

