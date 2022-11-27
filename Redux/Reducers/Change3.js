const Change3 = (state = 0, action) => {
    switch (action.type) {
        case 'change3':
            return state + 1;
        default:
            return state
    }
}

export default Change3;