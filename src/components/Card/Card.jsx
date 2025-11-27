import buttonTrash from "../../images/lixeira.png";
import buttonLike from "../../images/like_button.svg";

export default function Card(props) {
  const { name, link } = props.card;
  const { onImageClick } = props;

  return (
    <div className="element">
      <button
        className="element__delete-button"
        type="button"
        aria-label="Excluir cartão"
      >
        <img
          src={buttonTrash}
          alt="botão lixeira"
          className="element__lixeira-icon"
        />
      </button>
      <img
        className="element__image"
        src={link}
        alt="Imagem do card"
        onClick={() => onImageClick(props.card)}
      />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <button
          className="element__like-button"
          type="button"
          aria-label="Curtir"
        >
          <img
            src={buttonLike}
            alt="botão like"
            className="element__like-icon"
          />
        </button>
      </div>
    </div>
  );
}
