const Change5_2 = (state = 0, action) => {
    switch (action.type) {
        case 'change5_2':
            return state + 1;
        default:
            return state
    }
}

export default Change5_2;