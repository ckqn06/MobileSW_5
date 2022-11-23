//The store holds all the data or state of our application, globalized state

import counterReducer from "./Reducers/ScoreCounter";
import { createStore, combineReducers } from "redux" // createStore는 스토어를 만들어주는 함수입니다.
                                                    // 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.
const rootReducer = combineReducers({
    scoreCounter: counterReducer
})

export const store = createStore(rootReducer)