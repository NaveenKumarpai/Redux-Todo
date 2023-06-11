import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import TodoReducers from "./reducer/TodoReducers";

const reducer = combineReducers({
    Todo : TodoReducers,
});

const initialState = {};

const middleware = [thunk];

const Store = legacy_createStore(

    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;


