// AboutMe.jsx

import "./AboutMe.css"; // Nova importação
import { Link, Outlet } from "react-router-dom"; // Nova importação

function AboutMe() {
  // Adicione as classNames exibidas abaixo para que os estilos sejam aplicados.
  // E os links como exibidos abaixo.
  return (
    <div className="about">
      <ul className="links">
        <li>
          <Link to="my-story">Minha História</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Informações de Contato</Link>
        </li>
      </ul>
      <p>Eu sou uma pessoa comum. Eu vejo Emojis, eu escrevo avaliações.</p>
      <Outlet />
    </div>
  );
}

export default AboutMe;
