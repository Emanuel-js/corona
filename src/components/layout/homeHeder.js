import React from 'react';
import './../style.css';
import {Link} from 'react-router-dom';

const HomeHeader=()=>{
   const  styles={
        backgroundColor:'#29b9cc'
    }
return(
    <div className="header">
    <nav className="navbar n-home  navbar-expand-lg navbar-dark" style={styles}>
        <Link className="navbar-brand " to="/">
            COVID-19 In Ethiopia
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#about">About</Link>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cases
              </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/#eth">Ethiopa</Link>
                        <Link className="dropdown-item" to="#africa">Africa</Link>
                        <Link className="dropdown-item" to="/allCountry">All Country</Link>

                    </div>
                </li>

             
                <li className="nav-item">
                    <Link className="nav-link" to="#contact">Contact</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/eng">English</Link>
                        <Link className="dropdown-item" href="/amh">Amhrice</Link>
                    </div>
                </li>

            </ul>

        </div>
    </nav>
    <div className="title"> Corona Virus(COVID-19) In Ethiopia </div>
</div> 
)
}
export default HomeHeader;