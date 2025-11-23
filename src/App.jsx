import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page__content">
      <header className="header">
        <img
          className="header__logo"
          src="./images/header.png"
          alt="imagem Around"
        />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src=" " alt="imagem do avatar" />
            <div className="profile__avatar-edit"></div>
          </div>
          <div className="profile__info">
            <p className="profile__title"></p>
            <p className="profile__description"></p>
            <div className="profile__edit-button">
              <div className="profile__square">
                <img
                  className="profile__image-button"
                  src="./images/edit_button.png"
                  alt="botão editar"
                />
              </div>
            </div>
          </div>
          <div className="profile__retangule">
            <div className="profile__add-button">
              <img
                className="profile__add-image"
                src="./images/add_button.png"
                alt="botão editar"
              />
            </div>
          </div>
        </section>

        <div className="elements-container"></div>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2025. Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
