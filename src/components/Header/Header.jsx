import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
  <div className="container">
    <a className="navbar-brand text-danger fw-bold" href="#">FunToys</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
  
        <li className="nav-item me-3">
          <Link className="nav-link text-danger " aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" >All Toys</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" >My Toys</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link ">Add A Toy</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link"> Blogs</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link"> User profile picture.</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}
