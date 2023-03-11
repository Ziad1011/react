import React from 'react'
import logo from '../img/Penny-Logo.svg'

function Navbar() {
  return (
    <div className='Nav-p'>
      <nav className="navbar navbar-expand-lg text-center ">
  <div className="container-fluid container">
      <a className="nav-link active " aria-current="page" href="#!">
                <img src={logo} alt='' width={200} className="logo pt-2 "/>
              </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarNav">
            <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#!">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Company</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='#!'>Contact</a>
        </li>
            </ul>
          <button class="AR">العربيه</button>
          <button class="free-trial-nav">FREE TRIAL</button>
    </div>
  </div>
      </nav>
    </div>
  )
}

export default Navbar