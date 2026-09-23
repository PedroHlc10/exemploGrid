import { useState } from "react";

export default function Button() {
  const [valor, setValor] = useState(0);

  function aumentar() {
    if (valor < 10) {
      setValor(valor + 1);
    }
  }

  function zerar() {
    setValor(0);
  }

  return (
    <div>
      <button onClick={aumentar}>
        Aumentar
      </button>

      <button onClick={zerar}>
        Zerar
      </button>

      <span >
        {valor}
      </span>
    </div>
  );
}
