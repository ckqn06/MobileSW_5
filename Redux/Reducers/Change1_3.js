const Change1_3 =  (state = 0, action) => {
    switch (action.type) {
        case 'change1_3':
            return state + 1;
        default:
            return state
    }
}

export default Change1_3;