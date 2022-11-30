const Change3_3 = (state = 0, action) => {
    switch (action.type) {
        case 'change3_3':
            return state + 1;
        default:
            return state
    }
}

export default Change3_3;