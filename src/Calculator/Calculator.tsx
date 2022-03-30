import { useState } from "react";

function Calculator() {
  let [result, setResult] = useState("");

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const number = (event.target as any).number.value;
    alert(number);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input name="number" type="number" placeholder="type a number"></input>
        <button type="submit">translate to words</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;

export function numberToWords() {}
