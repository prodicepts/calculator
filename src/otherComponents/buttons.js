import React from "react";
import './css/button.css';
const Button = (props) => {
    
    return (
        <button className="btn shadow-1 grow" value={props.value} onClick={props.handleNumber } >
            {props.value}
        </button>
    );
}

export default Button;