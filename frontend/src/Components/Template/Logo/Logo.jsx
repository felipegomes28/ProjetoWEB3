import './Logo.css'
import React from 'react'
import Img from './logo.png'

export default props =>
    <aside className="logo">
        <img src={Img} alt="logo"/>
    </aside>