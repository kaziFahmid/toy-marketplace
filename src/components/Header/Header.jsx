import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

export default function Header() {
  const {user,logOut}=useContext(AuthContext)
  let handleLogout=()=>{
    logOut()
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
  <div className="container">
    <a className="navbar-brand text-danger fw-bold" href="#">FunToys</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
  
        <li className="nav-item me-3">
          <Link className="nav-link text-danger " aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to='/alltoys'>All Toys</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link"to='/mytoys' >My Toys</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link " to='/addatoy'>Add A Toy</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to='/blogs'> Blogs</Link>
        </li>
        {user?.email ? <li className="nav-item me-3" title={user.displayName}>
          <Link className="nav-link" >   <img src={user.photoURL} className="rounded-circle" style={{ width: '40px', height: '40px',objectFit:'cover' }} alt="Profile" /></Link>
        </li>:   <li className="nav-item me-3">
          <Link className="nav-link" to='/login'> Login</Link>
        </li>}

     
       
        {user?.email ? <li className="nav-item me-3">
          <Link className="nav-link" onClick={handleLogout}> Logout</Link>
        </li>:<li className="nav-item me-3">
          <Link className="nav-link"to='/signup'> Sign up</Link>
        </li>}
       
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}
