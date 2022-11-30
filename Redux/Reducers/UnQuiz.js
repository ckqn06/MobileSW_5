const UnQuiz = (state = 24, action) => {
    switch (action.type) {
        case 'unquiz':
            return state - 1;
        default:
            return state
    }
}

export default UnQuiz;