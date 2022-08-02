import React from "react"
export default props => [
    <h1 key="chave1"> Bom Dia {props.nome} !</h1>,
    <h2 key="chave2">Até breve!</h2>
]


// export default props => {
//     <React.Fragment>
//         <h1> Bom Dia {props.nome} !</h1>,
//         <h2>Até breve!</h2>
//     </React.Fragment>
// }

// export default props => {
//     <div>
//         <h1> Bom Dia {props.nome} !</h1>,
//         <h2>Até breve!</h2>
//     </div>
// }