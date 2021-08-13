import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './RootReducer.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default store;
