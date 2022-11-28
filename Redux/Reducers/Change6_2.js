const Change6_2 =  (state = 0, action) => {
    switch (action.type) {
        case 'change6_2':
            return state + 1;
        default:
            return state
    }
}

export default Change6_2;