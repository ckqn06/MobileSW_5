const Change6 = (state = 0, action) => {
    switch (action.type) {
        case 'change6':
            return state + 1;
        default:
            return state
    }
}

export default Change6;