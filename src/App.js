import React, {useState, useEffect} from "react";
import "./style.css";
import ApiTraductor from "./services/traductorApi.js"

export default  function App() {

  const [datos, useDatos] = useState('')
  async function fetchData(text) {
      try {
          const res = await ApiTraductor(text); 
          useDatos(res);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={(() => fetchData('My mother is maria and has age 20'))}>Buscar</button>
      <h4>{datos}</h4>
    </div>
  );
}
