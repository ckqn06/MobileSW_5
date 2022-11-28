const Change1_2 =  (state = 0, action) => {
    switch (action.type) {
        case 'change1_2':
            return state + 1;
        default:
            return state
    }
}

export default Change1_2;