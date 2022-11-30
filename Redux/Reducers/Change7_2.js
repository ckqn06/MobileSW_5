const Change7_2 = (state = 0, action) => {
    switch (action.type) {
        case 'change7_2':
            return state + 1;
        default:
            return state
    }
}

export default Change7_2;