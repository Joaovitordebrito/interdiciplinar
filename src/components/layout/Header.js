import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header style={headerStyle}>
        <h1>Sua Lista de afazeres</h1>
        <Link style={linkStyle} to="/">home</Link> |
        <Link style={linkStyle} to="/about">Sobre</Link> 
    </header>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
  color: '#fff',
  textDecoration:'none'
}
