import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [zerar, setZerar] = useState(0)
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    const merge = (st1, st2) => {
        return [...st1].map((e, i) => `${e}${st2[i] || ''}`).join('')
    }

    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])
    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])
    useEffect(function () {
        setZerar(count.current = 0)
    }, [zerar])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div>
                <span className="text">Valor :</span>
                <span className="text">{merge(value1, value2)} [</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
            </div>
            <input type="text" ref={myInput1} value={value1} className="input" onChange={e => setValue1(e.target.value)} />
            <input type="text" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)} className="input" />
            <SectionTitle title="Exercício #02"></SectionTitle>
            <button className="btn" onClick={() => setZerar()}>Zerar</button>
        </div>
    )
}

export default UseRef
