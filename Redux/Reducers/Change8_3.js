const Change8_3 = (state = 0, action) => {
    switch (action.type) {
        case 'change8_3':
            return state + 1;
        default:
            return state
    }
}

export default Change8_3;