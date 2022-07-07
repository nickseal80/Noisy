import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const container = document.querySelector('#root');

if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    );
}

