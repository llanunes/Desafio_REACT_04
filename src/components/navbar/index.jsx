import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
    <nav className="navbar">
        <div>
           <Link className="nav-link" to="/">Home</Link>
           <Link className="nav-link" to="/sobre"> Sobre </Link>
           <Link className="nav-link" to="/linguagens">Linguagens</Link>
        </div>
    </nav>
    )
}

