import React from "react";


export default props => {
    const max = 80
    const min = 27
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const gerarHacker = () => Math.random() > 0.5
    const cb = props.quandoClickar
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('NoName', gerarIdade(), gerarHacker())}>
                Enviar Info
            </button>
        </div>
    )
}