import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <MaterialUIControllerProvider>
        <App />
    </MaterialUIControllerProvider>
    
    </BrowserRouter>

);
