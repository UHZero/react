import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import { showStates } from '../../store/functions/hooksFunctions'


const UseRef = (props) => {
    const [count, inc, dec] = useCounter(20)
    const base_url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(base_url)
    return (
        < div className="UseCustom" >
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            <span className="text">{count}</span>
            <div>
                <button className="btn" onClick={_ => inc()}>+1</button>
                <button className="btn" onClick={_ => dec()}>-1</button>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : 'Page not found!'}
                </ul>
            </div>

        </div >
    )
}

export default UseRef
