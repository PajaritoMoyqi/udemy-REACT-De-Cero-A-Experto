import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">Navbar</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link" href="#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" className="nav-link" href="#">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/login" className="nav-link" href="#">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
