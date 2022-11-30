const Change4_3 = (state = 0, action) => {
    switch (action.type) {
        case 'change4_3':
            return state + 1;
        default:
            return state
    }
}

export default Change4_3;