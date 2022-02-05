//npm install @mui/material @emotion/react @emotion/styled 
import React from "react";
import "./calculator.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { useState } from "react";

export default  function Calculator(){
    const[num,setNum] = useState(0);
    const[oldNum,setOldNum] = useState(0);
    const[operator,setOperator] = useState(0);

    function inputNum(e){
        var input = e.target.value;
        if(num===0){
            setNum(input); //se o número que ja estiver no visor for zero, substitui pelo novo número
        }else{
            setNum(num + input);
        }
    }

    function clear(){
        setNum(0);
    }

    function porcentage(){
        setNum(num/100);
    }

    function changeSign() {
        if (num > 0) {
          setNum(-num);
        } else {
          setNum(Math.abs(num));
        }
      }

      function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0)
      }

      function calculate(){
          var result = 0;
          if(operator === "+"){
            result = (parseFloat(oldNum) + parseFloat(num));
          }
          else if(operator === "-"){
            result = (parseFloat(oldNum) - parseFloat(num));
          }
          else if(operator === "/"){
            if(num!=0 && num>0){
                result = (parseFloat(oldNum) / parseFloat(num));
            }
          }
          else if(operator === "x"){
            result = (parseFloat(oldNum) * parseFloat(num));
          }
          setNum(result);
      }

    return(
        <div>
        <Box m={2}/>
        <Container maxWidth="xs">
            <div className="wrapper">
                <Box m={10}/>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear} >AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage} >%</button>
                    <button onClick={operatorHandler} className="orange" value="/">/</button>

                    <button onClick={inputNum} value={7} className="gray">7</button>
                    <button onClick={inputNum} value={8} className="gray">8</button>
                    <button onClick={inputNum} value={9} className="gray">9</button>
                    <button onClick={operatorHandler} className="orange" value="x">X</button>

                    <button onClick={inputNum} value={4} className="gray">4</button>
                    <button onClick={inputNum} value={5} className="gray">5</button>
                    <button onClick={inputNum} value={6} className="gray">6</button>
                    <button onClick={operatorHandler} className="orange" value="-">-</button>

                    <button onClick={inputNum} value={1} className="gray">1</button>
                    <button onClick={inputNum} value={2} className="gray">2</button>
                    <button onClick={inputNum} value={3} className="gray">3</button>
                    <button onClick={operatorHandler} 
                    className="orange" value="+">+</button>

                    <button onClick={inputNum} id="zero" className="gray" value={0}>0</button>
                    <button onClick={inputNum} value="." className="gray">,</button>
                    <button className="orange" onClick={calculate}>=</button>
            </div>
        </Container>
        </div>
        
    )
}

