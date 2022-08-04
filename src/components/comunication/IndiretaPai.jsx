import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [hacker, setHacker] = useState(false)
    function receberParams(nome, idade, hacker) {
        setNome(nome)
        setIdade(idade)
        setHacker(hacker)
    }
    return (
        <div>
            <div>
                <span> {nome} </span>
                <span> {idade} </span>
                <span> {hacker ? 'Hacker' : 'Não Manja'} </span>
            </div>
            <IndiretaFilho quandoClickar={receberParams}></IndiretaFilho>
        </div>
    )
}