const Change1 = (state = 0, action) => {
    switch (action.type) {
        case 'change1':
            return state + 1;
        default:
            return state
    }
}

export default Change1;