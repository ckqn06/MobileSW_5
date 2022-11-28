const Change2_3 =  (state = 0, action) => {
    switch (action.type) {
        case 'change2_3':
            return state + 1;
        default:
            return state
    }
}

export default Change2_3;