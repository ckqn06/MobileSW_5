// setting up the reducer
// It describes how the actions transform the current state to the next state,
//When the action is called, the reducer is going to check which action was called,
// and update the state accordingly

//Dispatch ==> sends the action to the reducer

//In summary, dispatch sends the actions to the reducer, whicj will check wich action 
// was sent, and based on that update the state in the store

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.


const counterReducer =  (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default counterReducer;


