import { useState } from "react";

function Calculator() {
  let [result, setResult] = useState("");

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const sentence = (event.target as any).sentence.value;
    alert(sentence);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input name="sentence" type="text" placeholder="type a string"></input>
        <button type="submit">translate to words</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;

export function countVowelsAndConsonants() {}
