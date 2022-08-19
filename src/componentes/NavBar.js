import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='./home'>Home</Link>
        <Link to='./contact'>Contato</Link>
        <Link to='./company'>Empresa</Link>
        <Link to='./newproject'>Novo Projeto</Link>
    </div>
  )
}

export default NavBar