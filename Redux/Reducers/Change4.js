const Change4 =  (state = 0, action) => {
    switch (action.type) {
        case 'change4':
            return state + 1;
        default:
            return state
    }
}

export default Change4;