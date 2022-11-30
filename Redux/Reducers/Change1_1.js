const Change1_1 = (state = 0, action) => {
    switch (action.type) {
        case 'change1_1':
            return state + 1;
        default:
            return state
    }
}

export default Change1_1;