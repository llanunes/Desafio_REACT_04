import React from "react";
import "./home.css"
import { Link } from "react-router-dom"
import programador from "../../assets/200w.gif"

export default function Home() {
    return(
        <div>
            <div>
                <p>Desafio!</p>
            </div>
            <div className="container">
                <img className="gif" src= {programador} alt="programador" />
            </div>
           
        </div>      
    )
}