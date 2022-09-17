export function showStates(states) {
    return states.map(state =>
        <li key={state.name}>{state.nome} - {state.sigla}</li>)
}