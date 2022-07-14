import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { store } from './core/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

const container = document.querySelector('#root');

if (container) {
    const root = createRoot(container);
    root.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    );
}

