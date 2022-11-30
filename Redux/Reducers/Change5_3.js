const Change5_3 = (state = 0, action) => {
    switch (action.type) {
        case 'change5_3':
            return state + 1;
        default:
            return state
    }
}

export default Change5_3;