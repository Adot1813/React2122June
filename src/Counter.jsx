import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // Try to parse value as a number for conversions
  const numValue = parseFloat(value);
  const isNumber = !isNaN(numValue);

  function onTextChange(event) {
    console.log("this function is called!:" +event.target.value)
    console.error("this is erroe")
    setValue(event.target.value);
  }

  function handleShowCode() {
    alert(`Value: ${value}\nCount: ${count}`);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <input
        value={value}
        onChange={onTextChange}
        placeholder="Type a number..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <p>You typed <b>{value.length}</b> characters</p>
      <p>
        {value || "?"} Celsius to {isNumber ? (numValue * 1.8 + 32).toFixed(2) : "?"} Fahrenheit
      </p>
      <p>
        {value || "?"} Kilometers to {isNumber ? (numValue * 0.62137119).toFixed(2) : "?"} Miles
      </p>
      <p>
        {value || "?"} m to {isNumber ? (numValue * 100).toFixed(2) : "?"} cm
      </p>
      <p>
        {value || "?"} USD to {isNumber ? (numValue * 32.77).toFixed(2) : "?"} THB
      </p>
      <p>
        {value || "?"} EUR to {isNumber ? (numValue * 1.15).toFixed(2) : "?"} USD
      </p>
      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => setCount(count + 1)}>+1</button>{" "}
        <button onClick={() => setCount(count - 1)}>-1</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>{" "}
        <button onClick={handleShowCode}>Show Code</button>
      </div>
      <p>You clicked <b>{count}</b> times</p>
    </div>
  );
}