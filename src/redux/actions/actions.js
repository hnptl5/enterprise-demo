import * as actionTypes from './actionConstants';

export const counterIncrement = () => {
    return({
        type: actionTypes.INCRMENT
    })
}
export const counterDecrement = () => {
    return({
        type: actionTypes.DECREMENT,
    })
}