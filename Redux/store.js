//The store holds all the data or state of our application, globalized state

import Score1 from "./Reducers/Score1";
import Score2 from "./Reducers/Score2";
import Score3 from "./Reducers/Score3";
import Score4 from "./Reducers/Score4";
import Score5 from "./Reducers/Score5";
import Score6 from "./Reducers/Score6";
import Score7 from "./Reducers/Score7";
import Score8 from "./Reducers/Score8";

import { createStore, combineReducers } from "redux" // createStore는 스토어를 만들어주는 함수입니다.
                                                    // 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

const rootReducer = combineReducers({
    Score1, Score2, Score3, Score4, Score5, Score6, Score7, Score8
})

export const store = createStore(rootReducer)