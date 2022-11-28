const Change2_1 =  (state = 0, action) => {
    switch (action.type) {
        case 'change2_1':
            return state + 1;
        default:
            return state
    }
}

export default Change2_1;