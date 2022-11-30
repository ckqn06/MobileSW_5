const Change3_1 = (state = 0, action) => {
    switch (action.type) {
        case 'change3_1':
            return state + 1;
        default:
            return state
    }
}

export default Change3_1;