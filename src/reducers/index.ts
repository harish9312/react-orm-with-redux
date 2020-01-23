import { combineReducers } from "redux";
import { modelReducer } from './modelReducer';

export const rootReducer = combineReducers({
    model: modelReducer
})