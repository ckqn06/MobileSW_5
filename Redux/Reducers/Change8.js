const Change8 =  (state = 0, action) => {
    switch (action.type) {
        case 'change8':
            return state + 1;
        default:
            return state
    }
}

export default Change8;