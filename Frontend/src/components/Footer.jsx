import React from 'react'
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
     <Link to="/" className="nav-link px-2 text-muted">Home</Link>
      <Link to="/login" className="nav-link px-2 text-muted">Login</Link>

     <Link to="/createuser" className="nav-link px-2 text-muted">Sign up</Link>
    <Link to="/" className="nav-link px-2 text-muted">About</Link>
    </ul>
    <p className="text-center text-muted">© 2021 Company, Inc</p>
  </footer>
   
  )
}
