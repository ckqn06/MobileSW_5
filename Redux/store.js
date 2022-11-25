//The store holds all the data or state of our application, globalized state

import Score1 from "./Reducers/Score1";
import Score2 from "./Reducers/Score2";
import Score3 from "./Reducers/Score3";
import Score4 from "./Reducers/Score4";
import Score5 from "./Reducers/Score5";
import Score6 from "./Reducers/Score6";
import Score7 from "./Reducers/Score7";
import Score8 from "./Reducers/Score8";
import Change1 from "./Reducers/Change1";
import Change2 from "./Reducers/Change2";
import Change3 from "./Reducers/Change3";
import Change4 from "./Reducers/Change4";
import Change5 from "./Reducers/Change5";
import Change6 from "./Reducers/Change6";
import Change7 from "./Reducers/Change7";
import Change8 from "./Reducers/Change8";

import { createStore, combineReducers } from "redux" // createStore는 스토어를 만들어주는 함수입니다.
                                                    // 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

const rootReducer = combineReducers({
    Score1, Score2, Score3, Score4, Score5, Score6, Score7, Score8, Change1
    , Change2, Change3, Change4, Change5, Change6, Change7, Change8
})

export const store = createStore(rootReducer)