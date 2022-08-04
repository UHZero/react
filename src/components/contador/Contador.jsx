import React, { Component } from "react";

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

    setPass = (e) => this.setState({ pass: +e.target.value })

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="passInput">Pass: </label>
                    <input type="number" value={this.state.pass} id="passInput" onChange={this.setPass} />
                </div>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div>
        )
    }
}

export default Contador