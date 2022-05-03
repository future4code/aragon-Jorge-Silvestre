import React from "react";

function Etapa1() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <select name="select">
        <option value="Ensino médio Incompleto"selected>Ensino médio Incompleto</option>
        <option value="Ensino médio Completo">Ensino médio Completo</option>
        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
        </select>
      </div>
    );
  }
  
  export default Etapa1;
  