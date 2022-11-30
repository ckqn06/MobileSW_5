const Change4_2 = (state = 0, action) => {
    switch (action.type) {
        case 'change4_2':
            return state + 1;
        default:
            return state
    }
}

export default Change4_2;