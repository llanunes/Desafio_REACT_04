
import "./linguagens.css"
import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';


function Linguagens() {
  return (
    <div>
        <p className="text-ling">
            As linguagens utilizadas foram:
        </p>
        <div className="container">
            <div>
                <FaReact className="react"/>
                <FaJs className="js" />
                <FaHtml5 className="html"/>
                <FaCss3 className="css"/>
            </div>
        </div>
        
    </div>
  );
}

export default Linguagens;




