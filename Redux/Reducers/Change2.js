const Change2 = (state = 0, action) => {
    switch (action.type) {
        case 'change2':
            return state + 1;
        default:
            return state
    }
}

export default Change2;