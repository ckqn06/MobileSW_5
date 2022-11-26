const Change7 = (state = 0, action) => {
    switch (action.type) {
        case 'change7':
            return state + 1;
        default:
            return state
    }
}

export default Change7;