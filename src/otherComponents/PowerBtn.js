import React from "react";
import './css/button.css';
const PowerBtn = ({value, toggleOn}) => {
    const green = {
                     backgroundColor: 'green'
                }
    
    return (
        <button 
            className={value === "ON" ? "green btn  grow" : "red btn shadow-1 grow"}
            onClick={toggleOn}
            style={green}
        >
            {value}
        </button>
    );
}

export default PowerBtn;