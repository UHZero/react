import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAddN, numberMultN, numberDivN, toInt, setNumberN, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user.name ? <span className="text">{state.user.name}</span> : <span className="text">Anônimo</span>}
                <span className="text">{state.number}</span>
            </div>
            <div className="center">
                <button className="btn"
                    onClick={_ => numberAddN(dispatch, 2)}>+ 2</button>
                <button className="btn"
                    onClick={_ => numberMultN(dispatch, 7)}>x 7</button>
                <button className="btn"
                    onClick={_ => numberDivN(dispatch, 25)}>/ 25</button>
                <button className="btn"
                    onClick={_ => toInt(dispatch)}>Int</button>
                <button className="btn"
                    onClick={_ => setNumberN(dispatch, number)}>{number}</button>
                <input type="number" onChange={e => setNumber(parseInt(e.target.value))} />
                <button className="btn"
                    onClick={_ => login(dispatch, 'Teste OK!')}>Login</button>
            </div>
        </div>
    )
}

export default UseReducer
