import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../Template/Footer/Footer'
import Logo from '../Template/Logo/Logo'
import './CrudPassageiro.css'
import { Link } from 'react-router-dom'

const URLPassageiro = "http://localhost:3001/passageiro"
const initialState = {
    passageiro: { id: '', name: '', destino: '', data: '' },
    list: []
}
export default class CrudPassageiro extends Component {
    state = { ...initialState }

    clear() {
        this.setState({ passageiro: initialState.passageiro })
    }

    save() {
        const passageiro = this.state.passageiro
        const method = 'post'
        const url = passageiro.id ? `${URLPassageiro}/${passageiro.id}` : URLPassageiro
        axios[method](url, passageiro)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ passageiro: initialState.passageiro, list })
            })
    }

    getUpdateList(passageiro) {
        const list = this.state.list.filter(p => p.id !== passageiro.id)
        list.unshift(passageiro)
        return list
    }

    updateField(event) {
        const passageiro = { ...this.state.passageiro }
        passageiro[event.target.name] = event.target.value
        this.setState({ passageiro })
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
                            value={this.state.passageiro.name}
                            onChange={p => this.updateField(p)}
                            placeholder="Digite o nome..." /> <br />
                        <span id="raca">Destino: </span>
                        <input type="text" id="input2" className="form-control"
                            name="destino"
                            value={this.state.passageiro.destino}
                            onChange={p => this.updateField(p)}
                            placeholder="Digite seu destino..." /> <br />
                        <span id="raca">Data: </span>
                        <input type="text" id="input3" className="form-control"
                            name="data"
                            value={this.state.passageiro.data}
                            onChange={p => this.updateField(p)}
                            placeholder="xx/xx/xx..." /> <br />
                        <button id="btn" className="button"
                            onClick={p => this.save(p)}>PEDIR CARONA</button>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}