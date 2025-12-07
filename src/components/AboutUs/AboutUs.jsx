import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom"; // Nova importação

function AboutUs() {
  return (
    <div className="about-us">
      <ul>
        <li>
          <Link to="history">História do Site</Link>
        </li>
        <li>
          <Link to="mission">Missão do Site</Link>
        </li>
      </ul>
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
