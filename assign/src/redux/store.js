
import { combineReducers } from "redux";
import {reducer as SignUpReducer } from "../redux/reducer";

import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  signup:SignUpReducer,
 
})

const store = createStore(
 rootReducer,
  composeWithDevTools()
);

export {store}

