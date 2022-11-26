//Actions: it describes what you want to do 

//액션 타입

//up1~8 합수 불러오면 점수 증가
export const up1 = () => { return {type:'UP1'} };
export const up2 = () => { return {type:'UP2'} };
export const up3 = () => { return {type:'UP3'} };
export const up4 = () => { return {type:'UP4'} };
export const up5 = () => { return {type:'UP5'} };
export const up6 = () => { return {type:'UP6'} };
export const up7 = () => { return {type:'UP7'} };
export const up8 = () => { return {type:'UP8'} };

export const change1 = () => { return {type:'change1'} };
export const change2 = () => { return {type:'change2'} };
export const change3 = () => { return {type:'change3'} };
export const change4 = () => { return {type:'change4'} };
export const change5 = () => { return {type:'change5'} };
export const change6 = () => { return {type:'change6'} };
export const change7 = () => { return {type:'change7'} };
export const change8 = () => { return {type:'change8'} };

//decrement 함수 불러오면 점수 감소
export const decrement = () => { return {type: 'DECREMENT'} }
