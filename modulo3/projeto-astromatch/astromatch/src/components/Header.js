import React from 'react';
import "./Header.css"
 
function Header(props) {
    return (
        <header>
            <h1>AstroMatch</h1>
            <button className='glow-on-hover' onClick={props.mudaPagina}>{props.nomeBotao()}</button>
            <hr />
        </header>
    );
}

export default Header;