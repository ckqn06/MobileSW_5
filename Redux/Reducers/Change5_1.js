const Change5_1 =  (state = 0, action) => {
    switch (action.type) {
        case 'change5_1':
            return state + 1;
        default:
            return state
    }
}

export default Change5_1;