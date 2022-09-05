import { Link } from "react-router-dom";
import "./navbar.css";
import imgLogo from "../../assets/logo/en-linea.png";
export default function NavBar() {
  return (
    <header className="containerNavBar">
      <div className="containerPrincipal">
        <img src={imgLogo} alt="" srcSet="" className="imgLogo" />
        <Link to="/" className="tituloNavBar">
          TranslatorDo
        </Link>
      </div>
      <div className="containerPrincipal">
        <h4>Datos</h4>
        <h4>Datos</h4>
        <h4>Datos</h4>
        <h4>Datos</h4>
      </div>
      <div className="containerPrincipal">
        <h4>Inicio</h4>
      </div>
    </header>
  );
}
