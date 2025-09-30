import React, { useState } from "react";
import './CSS/styles.css'

function GetCal() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid operation");
    }
  };

  return (
    <>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div >
        <button className="button" onClick={() => handleCalculation("+")}>Add</button>
        <button className="button" onClick={() => handleCalculation("-")}>Subtract</button>
        <button className="button" onClick={() => handleCalculation("*")}>Multiply</button>
        <button className="button" onClick={() => handleCalculation("/")}>Divide</button>
      </div>

      <h3 style={{ marginTop: "20px" }}>Result: {result}</h3>
    </>
  );
}

export default GetCal;
