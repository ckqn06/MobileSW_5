const Change8_1 = (state = 0, action) => {
    switch (action.type) {
        case 'change8_1':
            return state + 1;
        default:
            return state
    }
}

export default Change8_1;