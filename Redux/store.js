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
import Change1_1 from "./Reducers/Change1_1";
import Change1_2 from "./Reducers/Change1_2";
import Change1_3 from "./Reducers/Change1_3";

import Change2 from "./Reducers/Change2";
import Change2_1 from "./Reducers/Change2_1";
import Change2_2 from "./Reducers/Change2_2";
import Change2_3 from "./Reducers/Change2_3";

import Change3 from "./Reducers/Change3";
import Change3_1 from "./Reducers/Change3_1";
import Change3_2 from "./Reducers/Change3_2";
import Change3_3 from "./Reducers/Change3_3";

import Change4 from "./Reducers/Change4";
import Change4_1 from "./Reducers/Change4_1";
import Change4_2 from "./Reducers/Change4_2";
import Change4_3 from "./Reducers/Change4_3";

import Change5 from "./Reducers/Change5";
import Change5_1 from "./Reducers/Change5_1";
import Change5_2 from "./Reducers/Change5_2";
import Change5_3 from "./Reducers/Change5_3";

import Change6 from "./Reducers/Change6";
import Change6_1 from "./Reducers/Change6_1";
import Change6_2 from "./Reducers/Change6_2";
import Change6_3 from "./Reducers/Change6_3";

import Change7 from "./Reducers/Change7";
import Change7_1 from "./Reducers/Change7_1";
import Change7_2 from "./Reducers/Change7_2";
import Change7_3 from "./Reducers/Change7_3";

import Change8 from "./Reducers/Change8";
import Change8_1 from "./Reducers/Change8_1";
import Change8_2 from "./Reducers/Change8_2";
import Change8_3 from "./Reducers/Change8_3";

import Correct from "./Reducers/Correct";
import Wrong from "./Reducers/Wrong";
import UnQuiz from "./Reducers/UnQuiz";

import { createStore, combineReducers } from "redux" // createStore는 스토어를 만들어주는 함수입니다.
                                                    // 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.
const rootReducer = combineReducers({
    Score1, Score2, Score3, Score4, Score5, Score6, Score7, Score8,
    Change1, Change1_1, Change1_2, Change1_3, Change2, Change2_1, Change2_2, Change2_3,
    Change3, Change3_1, Change3_2, Change3_3, Change4, Change4_1, Change4_2, Change4_3,
    Change5, Change5_1, Change5_2, Change5_3, Change6, Change6_1, Change6_2, Change6_3,
    Change7, Change7_1, Change7_2, Change7_3, Change8, Change8_1, Change8_2, Change8_3,
    Correct, Wrong, UnQuiz
})

export const store = createStore(rootReducer)