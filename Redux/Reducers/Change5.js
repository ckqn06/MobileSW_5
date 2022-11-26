const Change5 =  (state = 0, action) => {
    switch (action.type) {
        case 'change5':
            return state + 1;
        default:
            return state
    }
}

export default Change5;