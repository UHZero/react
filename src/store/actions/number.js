export function numberAddN(dispatch, numberN) {
    dispatch({ type: 'numberAddN', numberN: numberN })
}
export function numberMultN(dispatch, numberN) {
    dispatch({ type: 'numberMultN', numberN: numberN })
}
export function numberDivN(dispatch, numberN) {
    dispatch({ type: 'numberDivN', numberN: numberN })
}
export function setNumberN(dispatch, numberN) {
    dispatch({ type: 'setNumber', numberN: numberN })
}
export function toInt(dispatch) {
    dispatch({ type: 'parseInt' })
}