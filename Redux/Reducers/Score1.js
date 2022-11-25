const Score1 =  (state = 0, action) => {
    switch (action.type) {
        case 'UP1':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default Score1;