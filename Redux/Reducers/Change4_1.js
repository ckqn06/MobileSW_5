const Change4_1 = (state = 0, action) => {
    switch (action.type) {
        case 'change4_1':
            return state + 1;
        default:
            return state
    }
}

export default Change4_1;