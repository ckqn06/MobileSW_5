const Change7_3 = (state = 0, action) => {
    switch (action.type) {
        case 'change7_3':
            return state + 1;
        default:
            return state
    }
}

export default Change7_3;