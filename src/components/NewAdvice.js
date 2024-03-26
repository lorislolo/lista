import React, { useState } from "react";

function NewAdvice() {
  const [advices, setAdvices] = useState([]);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvices(lista => [...lista, data.slip.advice]);
    } catch (error) {
      console.error("Erro ao obter conselho:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchAdvice} type="button">Pegue um conselho ruim</button>
      <ul>
        {advices.map((advice) => (
          <li>{advice}</li>
        ))}
      </ul>
    </div>   
  );
}

export default NewAdvice;