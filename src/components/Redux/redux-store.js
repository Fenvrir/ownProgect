import {combineReducers, createStore, applyMiddleware} from 'redux'
import  SimpleDNDReducer  from './SimpleDND-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './Posts-reducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    simpleDnD: SimpleDNDReducer,
    postReducer,
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;