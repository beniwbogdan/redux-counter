import {
    combineReducers,
    // configureStore
  } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";

const rootReducer = combineReducers(
    {
        cash:cashReducer,
        customers:customerReducer,
    }
)

export const store = createStore(rootReducer, composeWithDevTools());