import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.scss';
import { Provider } from 'react-redux';
import store from './components/common/state/Store.js'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
