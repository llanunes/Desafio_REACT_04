import React from "react";
import "./sobre.css"
import programacao from "../../assets/programacao.png"

export default function Sobre() {
    return(
        <div>
            <div>
                <p className="text-sobre">Criei um projeto onde as rotas descarregam um componente e carregam um novo, sem que o antigo componente perdesse seu estado e a página fosse atualizada.</p>
            </div>
            <div className="container">
                <img className="gif" src= {programacao} alt="programacao" />
            </div>  
        </div>      
    )
}