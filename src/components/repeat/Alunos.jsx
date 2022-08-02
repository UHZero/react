import alunos from '../../data/alunos'
import React from 'react'
export default _ => {
    const alunosJSX = alunos.map(aluno => {
        return (
            <li key={aluno.id}>{aluno.id}) {aluno.nome} --> {aluno.nota}</li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                {alunosJSX}
            </ul>
        </div>
    )
}