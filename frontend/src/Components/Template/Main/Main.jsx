import './Main.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <React.Fragment>
        <main className="content">
            <div>
                <div className="form">
                    <Link to="/passageiro">
                        <button className="input1">PEDIR CARONA</button><br/>
                    </Link>
                    <Link to="/motorista">
                        <button className="input2">OFERECER CARONA</button>
                    </Link>
                </div>
            </div>
        </main>
    </React.Fragment>