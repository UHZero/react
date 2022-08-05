import "./Contador.css"
import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";

class Contador extends Component {
    state = {
        number: this.props.startNumber || 0,
        pass: this.props.startPass || 1
    }

    constructor(props) {
        super(props)

        this.inc = this.inc.bind(this)
    }

    inc() {
        this.setState({
            number: this.state.number + this.state.pass
        })
    }

    dec = () => this.setState({ number: this.state.number - this.state.pass })

    setPass = (newPass) => this.setState({ pass: newPass })

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display number={this.state.number} />
                <PassForm startPass={this.state.pass} changePass={this.setPass} />
                <Buttons incrementar={this.inc} decrementar={this.dec} />
            </div>
        )
    }
}

export default Contador