const Change3_2 = (state = 0, action) => {
    switch (action.type) {
        case 'change3_2':
            return state + 1;
        default:
            return state
    }
}

export default Change3_2;