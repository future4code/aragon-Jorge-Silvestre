import React from "react";

function CardPequeno(props){
    return(
        <div className="smallcard-container">
            <div className="informacoessmallcard">
                <span className="negrito">Email: </span>
                <span>{props.email}</span>
            </div>
            
            <div className="informacoessmallcard">
                <span className="negrito">Endereço: </span>
                <span>{props.rua} Bairro: {props.bairro} Estado: {props.estado}</span>
            </div>
            
        </div>
    )
}

export default CardPequeno;