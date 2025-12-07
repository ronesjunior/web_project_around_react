import { NavLink } from "react-router-dom";
import "./NavBar.css";

const customClassName = ({ isActive }) =>
  "menu__link" + (isActive ? " menu__link_active" : ""); // uma variável que recebe uma função arrow. A função retorna "menu__link" + "menu__link_active" se isActive for true

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Pagina Inicial
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Avaliações de Emoji
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre Mim
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        Sobre Nós
      </NavLink>
    </nav>
  );
}

export default NavBar;

// é criado pelo componente NavLink
//  {
//   isActive: true/false,
//   isPending: true/false,
//   isTransitioning: true/false
// }
