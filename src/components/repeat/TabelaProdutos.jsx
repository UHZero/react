import './TabelaProduto.css'
import produtos from "../../data/produtos";
import React from "react";

export default _ => {
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return (
        <div className='TabelaProduto'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTO</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}