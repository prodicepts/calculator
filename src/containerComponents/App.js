import React, {   useState } from "react";
import './css/App.css';
import Button from "../otherComponents/buttons";
import PowerBtn from "../otherComponents/PowerBtn";
import Equal from "../otherComponents/Equal";
import Inputs from "../otherComponents/Inputs";

const App = () => {
    const [onCal, setOnCal] = useState(false);
    const [inVal, setinVal] = useState('');
    const [result, setResult] = useState('');
    const [pending, setPending] = useState(Array(3).fill(null));
    const [isOperator, setIsOperator] = useState(false);
    const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

   
    
    const appendNumber = (event) => {
         
         if(onCal){
            let value = event.target.value;
            switch (value) {
                case "C":
                    setinVal("");
                    setResult("");
                    setPending(Array(3).fill(null));
                    setIsOperator(false);
                    break;
                case "<-":
                    if(inVal.length > 0){
                        setinVal(inVal.substring(0, inVal.length - 1))
                    }
                    break;
                case "0":
                    if(inVal.length > 0){
                        setinVal((prevState) => prevState + value)
                    }
                    break;
                case "%":
                    // setinVal((prevState) => prevState/100)
                    setResult(inVal/100);
                    setinVal('')
                    break;
                case ".":
                    // const a = "30.55";
                    // if(a.includes('.')){
                    //     return;
                    //     // console.log(a.includes('.'))
                    // }else{
                    //     console.log(a.includes('.'))
                    // }
                    if(inVal.includes(".") ){
                        return false;
                    }else{
                        
                        setinVal((prevState) => prevState + ".")
                    }
                    console.log(inVal)
                    break;
                case "+":
                    if(pending.indexOf("+") === 1 || pending[0] === ''){
                        return;
                    }
                    if(!isOperator){
                        pending[0] = inVal;
                        pending[1] = "+";
                        setIsOperator(true);
                    }
                    
                    setinVal('')
                    
                    break;
                case "-":
                    if(pending.indexOf("-") === 1 || pending[0] === ''){
                        return;
                    }
                    if(!isOperator){
                            pending[0] = inVal;
                            pending[1] = "-";
                            setIsOperator(true);
                    }
                        
                    setinVal('')
                        
                    break;

                    case "X":
                        if(pending.indexOf("X") === 1 || pending[0] === ''){
                            return;
                        }
                        if(!isOperator){
                                pending[0] = inVal;
                                pending[1] = "X";
                                setIsOperator(true);
                        }
                            
                        setinVal('')
                            
                        break;
                    case "/":
                            if(pending.indexOf("/") === 1 || pending[0] === ''){
                                return;
                            }
                            if(!isOperator){
                                    pending[0] = inVal;
                                    pending[1] = "/";
                                    setIsOperator(true);
                            }
                                
                            setinVal('')
                                
                            break;
            
                
                default:
                    if(inVal.length === undefined){
                        setinVal(value)
                    }else{
                        setinVal((prevState) => prevState + value)
                    }
                    
                    break;
            }
            // console.log(pending)
        }
         
        
    }
    
    const handleEquals = () => {
        if(onCal){
            if(pending[0] === '' || pending[2] === ''){
                return;
            }
        pending[2] = inVal;
        switch (pending[1]) {
            case "+":
                setResult((parseFloat(pending[0]) + parseFloat(pending[2])));
                console.log(result)
                break;
            case "-":
                setResult((parseFloat(pending[0]) - parseFloat(pending[2])));
                console.log(result)
                break;
            case "X":
                    setResult((parseFloat(pending[0]) * parseFloat(pending[2])));
                    console.log(result)
                    break;
            case "/":
                setResult((parseFloat(pending[0]) / parseFloat(pending[2])));
                console.log(result)
                break;
        
            default:
                
                break;
        }
                setinVal("");
                // setPending("")
                // pending[0] = result;
                setIsOperator(false);
                console.log(pending)

        }
    }

    const handleOn = () => {
        
        (!onCal) ? setinVal(0):setinVal('');
        setOnCal(!onCal);
        setinVal("");
        setResult("");
        setPending(Array(3).fill(null));
        setIsOperator(false);
    }
    return (
        <div className="main">
            <div className="uppercompartment">
                <Inputs inputValue = {inVal} result ={result}/>
            </div>

            <div className="lowercompartment">
                <div className="row">
                    <Button value={'%'} handleNumber = {appendNumber}/>
                    <Button value ={'C'} handleNumber = {appendNumber}/>
                    <Button value ={'<-'} handleNumber = {appendNumber}/>
                    <Button value={'/'} handleNumber = {appendNumber}/>
                </div>

                <div className="row">
                    <Button value={numberArray[7]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[8]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[9]} handleNumber = {appendNumber}/>
                    <Button value={'X'} handleNumber = {appendNumber}/>
                </div>

                <div className="row">
                    <Button value={numberArray[4]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[5]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[6]} handleNumber = {appendNumber}/>
                    <Button value={'-'} handleNumber = {appendNumber}/>
                </div>

                <div className="row">
                    <Button value={numberArray[1]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[2]} handleNumber = {appendNumber}/>
                    <Button value ={numberArray[3]} handleNumber = {appendNumber}/>
                    <Button value={'+'} handleNumber = {appendNumber}/>
                </div>

                <div className="row">
                    <PowerBtn value={onCal?'OFF':'ON'} toggleOn = {handleOn}/>
                    <Button value ={numberArray[0]} handleNumber = {appendNumber}/>
                    <Button value ={'.'} handleNumber = {appendNumber}/>
                    <Equal value={'='} handleNumber = {handleEquals}/>
                </div>
            </div>
            
        </div>
    );
}

export default App;