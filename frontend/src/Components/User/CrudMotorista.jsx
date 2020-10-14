import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../Template/Footer/Footer'
import Logo from '../Template/Logo/Logo'
import './CrudMotorista.css'
import { Link } from 'react-router-dom'

const URLPassageiro = "http://localhost:3001/passageiro"
const URLMotorista = "http://localhost:3001/motorista"

const initialState = {
    motorista: { id: '', name: '', destino: '', data: '' },
    list: []
}

const initialState2 = {
    passageiro: { id: '', name: '', destino: '', data: '' },
    list: []
}

export default class CrudMotorista extends Component {
    state = { ...initialState }
    state2 = {...initialState2}

    clear() {
        this.setState({ motorista: initialState.motorista })
    }

    save() {
        const motorista = this.state.motorista
        const method = motorista.id ? 'put' : 'post'
        const url = motorista.id ? `${URLMotorista}/${motorista.id}` : URLMotorista
        axios[method](url, motorista)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ motorista: initialState.motorista, list })
            })
    }

    getUpdateList(motorista) {
        const list = this.state.list.filter(m => m.id !== motorista.id)
        list.unshift(motorista)
        return list
    }

    updateField(event) {
        const motorista = { ...this.state.motorista }
        motorista[event.target.name] = event.target.value
        this.setState({ motorista })
    }

    load(motorista){
        this.setState({motorista})
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/">
                    < Logo />
                </Link>
                <main className="content">
                    <div className="form">
                        <label>Nome: </label>
                        <input type="text" id="input1" className="form-control"
                            name="name"
                            value={this.state.motorista.name}
                            onChange={m => this.updateField(m)}
                            placeholder="Digite o nome..." /> <br />
                        <span id="raca">Destino: </span>
                        <input type="text" id="input2" className="form-control"
                            name="destino"
                            value={this.state.motorista.destino}
                            onChange={m => this.updateField(m)}
                            placeholder="Digite seu destino..." /> <br />
                        <span id="raca">Data: </span>
                        <input type="text" id="input3" className="form-control"
                            name="data"
                            value={this.state.motorista.data}
                            onChange={m => this.updateField(m)}
                            placeholder="xx/xx/xx..." /> <br />
                        <button id="btn" class="button"
                            onClick={m => this.save(m)}>OFERECER CARONA</button>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}