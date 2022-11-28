const Change8_2 =  (state = 0, action) => {
    switch (action.type) {
        case 'change8_2':
            return state + 1;
        default:
            return state
    }
}

export default Change8_2;