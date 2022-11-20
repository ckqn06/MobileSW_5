//The store holds all the data or state of our application, globalized state

import counterReducer from "./Reducers/ScoreCounter";
import { createStore, combineReducers } from "redux"

const rootReducer = combineReducers({
    scoreCounter: counterReducer
})

export const store = createStore(rootReducer)