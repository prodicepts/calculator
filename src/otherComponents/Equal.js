import React from "react";
import './css/button.css';
const Equal = (props) => {
    
    return (
        <button className="btn shadow-1 grow equals" onClick={props.handleNumber}>
            {props.value}
        </button>
    );
}

export default Equal;