import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcFatorial = num => {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ParImpar, setParImpar] = useState('Ímpar')

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])
    useEffect(function () {
        if (fatorial > 100000) {
            document.title = 'KRL'
        }
    }, [fatorial])
    useEffect(function () {
        setParImpar(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="#Exercício 01"></SectionTitle>
            <div className="">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'NaN' : fatorial}</span>
            </div>
            <div className="center">
                <input type="number" value={number} className="input" onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="#Exercício 02"></SectionTitle>
            <div>
                <span className="text">Status: </span>
                <span className="text red">{ParImpar}</span>
            </div>

        </div>
    )
}

export default UseEffect
