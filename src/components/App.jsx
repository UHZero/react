import './App.css'
import React from "react";

import Card from "./layout/Card";
import Pai from "./basic/Pai_2"
import Filho from "./basic/Filho"
import Random from "./basic/Random";
import Alunos from './repeat/Alunos';
import TabelaProdutos from './repeat/TabelaProdutos';

export default _ =>
    <div className="App">
        <h1> Arrow _ </h1>
        <div className="Cards">
            <Card title="Desafio Tabela">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card title="Repetição" color="rgba(10, 100, 236, 0.459)">
                <Alunos />
            </Card>
            <Card title="Desafio Aleatório" color="rgba(10, 100, 236, 0.459)">
                <Random max={10} min={1} />
            </Card>
            <Card title="Pai & Filho" color="rgba(181, 245, 7, 0.623)">
                <Pai nome="Áureo" sobrenome="Moraes">
                    <Filho nome="Jhon" />
                    <Filho nome="Laura" />
                    <Filho nome="Hynna" />
                </Pai>
            </Card>
        </div>
    </div>