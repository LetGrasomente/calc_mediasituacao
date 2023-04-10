import React, { useState } from "react";



function Notas() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);
  const [situacao, setSituacao] = useState("");

  function calcularMedia() {
    const media = (nota1 + nota2 + nota3) / 3;
    setMedia(media);
    setSituacao(media >= 6 ? "Parabéns voce esta Aprovado!!" : "Voce esta Reprovado; estude mais um pouco!!");
  }

  return (
    <div>
      <h2>Média Notas </h2>
      <div>
        <label htmlFor="nota1">Nota 1:</label>
        <input
          id="nota1"
          type="number"
          value={nota1}
          onChange={(event) => setNota1(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="nota2">Nota 2:</label>
        <input
          id="nota2"
          type="number"
          value={nota2}
          onChange={(event) => setNota2(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="nota3">Nota 3:</label>
        <input
          id="nota3"
          type="number"
          value={nota3}
          onChange={(event) => setNota3(Number(event.target.value))}
        />
      </div>
      <button onClick={calcularMedia}>Calcular Média</button>
      {media > 0 && (
        <div>
          <p>Média é:: {media}</p>
          <p>Situação é: {situacao}</p>
        </div>
      )}
    </div>
  );
}

export default Notas;