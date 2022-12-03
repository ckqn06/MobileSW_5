const Change7_1 = (state = 0, action) => {
    switch (action.type) {
        case 'change7_1':
            return state + 1;
        default:
            return state
    }
}

export default Change7_1;