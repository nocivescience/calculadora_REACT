import React, { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  
  const updateCalc = (value) => {
    setCalc((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setCalc(eval(calc).toString());
    } catch {
      setCalc("Error");
    }
  };

  const clear = () => {
    setCalc("");
  };

  const styleCalculator = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
        "display display display display"
        'btn btn btn btn'
        'btn btn btn btn'
        'btn btn btn btn'
        'btn btn btn btn'
        'btn btn btn btn'
    `,
    gap: "10px",
    padding: "10px",
  };

  const display = {
    gridArea: "display",
    backgroundColor: "#f3f3f3",
    fontSize: "2em",
    textAlign: "right",
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "inset 0 0 5px white",
  };

  return (
    <div style={styleCalculator}>
      <div className="display" style={display}>{calc || "0"}</div>
      <button className="btn btn-zero" onClick={() => updateCalc("0")}>0</button>
      <button className="btn btn-one" onClick={() => updateCalc("1")}>1</button>
      <button className="btn btn-two" onClick={() => updateCalc("2")}>2</button>
      <button className="btn btn-three" onClick={() => updateCalc("3")}>3</button>
      <button className="btn btn-four" onClick={() => updateCalc("4")}>4</button>
      <button className="btn btn-five" onClick={() => updateCalc("5")}>5</button>
      <button className="btn btn-six" onClick={() => updateCalc("6")}>6</button>
      <button className="btn btn-seven" onClick={() => updateCalc("7")}>7</button>
      <button className="btn btn-eight" onClick={() => updateCalc("8")}>8</button>
      <button className="btn btn-nine" onClick={() => updateCalc("9")}>9</button>
      <button className="btn btn-dot" onClick={() => updateCalc(".")}>.</button>
      <button className="btn btn-add" onClick={() => updateCalc("+")}>+</button>
      <button className="btn btn-subtract" onClick={() => updateCalc("-")}>-</button>
      <button className="btn btn-multiply" onClick={() => updateCalc("*")}>*</button>
      <button className="btn btn-divide" onClick={() => updateCalc("/")}>/</button>
      <button className="btn btn-equals" onClick={calculate}>=</button>
      <button className="btn btn-clear" onClick={clear}>C</button>
    </div>
  );
};

export default Calculator;