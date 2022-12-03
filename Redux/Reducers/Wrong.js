const Wrong = (state = 0, action) => {
    switch (action.type) {
        case 'wrong':
            return state + 1;
        default:
            return state
    }
}

export default Wrong;