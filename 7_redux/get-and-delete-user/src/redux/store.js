import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer";
import thunk from 'redux-thunk';
// export const store= createStore(rootReducer)
const initStore = {};

export const store = createStore(rootReducer, initStore, applyMiddleware(thunk))
