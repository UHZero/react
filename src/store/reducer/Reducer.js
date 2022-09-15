
export function reducer(state, action) {
    switch (action.type) {
        case 'numberAddN':
            return { ...state, number: state.number + action.numberN }
        case 'numberMultN':
            return { ...state, number: state.number * action.numberN }
        case 'numberDivN':
            return { ...state, number: state.number / action.numberN }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'setNumber':
            return { ...state, number: state.number + action.numberN }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

export const initialState = {
    cart: [],
    products: [],
    user: {
        name: null
    },
    number: 0
}
