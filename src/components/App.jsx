import './App.css'
import React from "react";

import Contador from './contador/Contador';
import Form from './forms/Form';
import IndiretaPai from './comunication/IndiretaPai';
import UsuarioInfo from './condictional/UsuarioInfo';
import ParImpar from './condictional/ParImpar';
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
            <Card title="Contador" color="#1abc9c">
                <Contador startNumber={10}></Contador>
                <Contador startPass={5}></Contador>
            </Card>
            <Card title="Formulário" color="#1abc9c">
                <Form></Form>
            </Card>
            <Card title="Comunicação Indireta" color="#641e16">
                <   IndiretaPai></IndiretaPai>
            </Card>
            <Card title="Renderização Condicional" color="#3498db">
                <ParImpar number={3}></ParImpar>
                <UsuarioInfo usuario={{ nome: 'Jão' }} />
                <UsuarioInfo usuario={{ email: 'jao@email.com' }} />
            </Card>
            <Card title="Desafio Tabela" color="#f4d03f">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card title="Repetição" color="#34495e">
                <Alunos />
            </Card>
            <Card title="Desafio Aleatório" color="#9b59b6">
                <Random max={10} min={1} />
            </Card>
            <Card title="Pai & Filho" color="#c0392b">
                <Pai nome="Áureo" sobrenome="Moraes">
                    <Filho nome="Jhon" />
                    <Filho nome="Laura" />
                    <Filho nome="Hynna" />
                </Pai>
            </Card>
        </div>
    </div>