import React, { useState, useEffect } from "react";
import ApiTraductor from "../../services/traductorApi";

export default function Home() {
  const [data, setData] = useState("");
  const fetchData = async (valor) => {
    try {
      const valorRecupeado = await ApiTraductor(valor);
      setData(valorRecupeado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => fetchData("My mother is maria and has age 20")}>
        Buscar
      </button>
      <h4>{data}</h4>
    </div>
  );
}
