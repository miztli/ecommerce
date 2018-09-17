import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // For dynamic requests (ANY possible URI)
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
