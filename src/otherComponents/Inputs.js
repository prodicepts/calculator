import React from "react";
import './css/inputs.css';

const Inputs = (props) => {
    
    return (
        <div className="">
            <input type="text" className="a top" value={props.inputValue} readOnly/>

            <input type="text" className="a bottom" value={props.result} readOnly style={{backgroundColor:''}}/>

        </div>
    );
}

export default Inputs;