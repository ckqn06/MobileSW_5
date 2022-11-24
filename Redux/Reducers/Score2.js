const Score2 =  (state = 0, action) => {
    switch (action.type) {
        case 'UP2':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default Score2;