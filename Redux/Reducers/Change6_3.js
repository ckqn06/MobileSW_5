const Change6_3 =  (state = 0, action) => {
    switch (action.type) {
        case 'change6_3':
            return state + 1;
        default:
            return state
    }
}

export default Change6_3;