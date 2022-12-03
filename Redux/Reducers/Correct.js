const Correct = (state = 0, action) => {
    switch (action.type) {
        case 'cor':
            return state + 1;
        default:
            return state
    }
}

export default Correct;