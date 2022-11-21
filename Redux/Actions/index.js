//액션 타입

//increment 합수 불러오면 점수 증가

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

//decrement 함수 불러오면 점수 감소

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}