import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './RootReducer.js';
import thunk from 'redux-thunk';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const middleWare = compose(applyMiddleware(thunk), devTools);

const store = createStore(rootReducer, middleWare);

export default store;
