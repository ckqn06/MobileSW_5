const Change6_1 =  (state = 0, action) => {
    switch (action.type) {
        case 'change6_1':
            return state + 1;
        default:
            return state
    }
}

export default Change6_1;