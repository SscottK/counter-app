import React, { useState } from "react";
import Button from "./Button";
import "./App.css"

function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrement = (incrementValue) => {
    const newValue = value + parseInt(incrementValue, 10);
    setValue(newValue);
  };

  const handleDecrement = (decrementValue) => {
    const newValue = value - parseInt(decrementValue, 10);
    setValue(newValue);
  };

  const handleMultiplyIncrement = (incrementValue) => {
    const newValue = value * parseInt(incrementValue, 10);
    setValue(newValue)
  }

  const handleDivide = (divideValue) => {
    const newValue = value / parseInt(divideValue, 10);
    setValue(newValue)
  }

  return (
    <div>
      <h1>Press A Button</h1>
      <div className="board">
        <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
          {value}
        </div>
        <div className="container">
          <Button
            action={() =>
              handleIncrement(2 * parseInt(document.getElementById("number").value, 10))
            }
            symbol="++"
          />
          <Button
            action={() =>
              handleIncrement(document.getElementById("number").value)
            }
            symbol="+"
          />
          
          <div className="value-form">
            <input type="number" id="number" defaultValue="0" />
          </div>
          <Button
            action={() =>
              handleDecrement(document.getElementById("number").value)
            }
            symbol="-"
          />
          <Button
            action={() =>
              handleDecrement(2 * parseInt(document.getElementById("number").value, 10))
            }
            symbol="--"
          />          
        </div>
        <div id="extras">
          <Button
            action={() => {
                handleMultiplyIncrement(parseInt(document.getElementById("number").value, 10))          
            }}
            symbol="X"
          ></Button>
          <Button
            action={() => {
                handleDivide(parseInt(document.getElementById("number").value, 10))          
            }}
            symbol="/"
          ></Button>
          <Button
            action={() => {
                setValue(0);
                document.getElementById("number").value = "0"            
            }}
            symbol="C"
          ></Button>
        </div>        
      </div>
    </div>
  );
}

export default Counter;