const Score6 =  (state = 0, action) => {
    switch (action.type) {
        case 'UP6':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

export default Score6;