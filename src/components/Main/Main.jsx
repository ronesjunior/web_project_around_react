import editButton from "../../images/edit_button.png";
import addButton from "../../images/add_button.png";
import avatar from "../../images/jaques_costeau.jpg";
import Popup from "../Main/Components/Popup/Popup.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import Card from "../Card/Card.jsx";
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: true,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const newCardPopup = { title: "Novo local", children: <NewCard /> };
  const editProfile = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  function handleImageClick(card) {
    setSelectedImage(card);
  }

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedImage(null);
  }

  return (
    <main className="main">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => handleOpenPopup(editAvatar)}
        >
          <img
            className="profile__avatar"
            src={avatar}
            alt="imagem do avatar"
          />
          <div className="profile__avatar-edit"></div>
        </div>
        <div className="profile__info">
          <p className="profile__title">Jacques Cousteau</p>
          <p className="profile__description">Explorador</p>
          <div className="profile__edit-button">
            <div
              className="profile__square"
              onClick={() => handleOpenPopup(editProfile)}
            >
              <img
                className="profile__image-button"
                src={editButton}
                alt="botão editar"
              />
            </div>
          </div>
        </div>

        <div className="profile__retangule">
          <div
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              className="profile__add-image"
              src={addButton}
              alt="botão editar"
            />
          </div>
        </div>
      </section>

      <div className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onImageClick={handleImageClick} />
        ))}
      </div>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          children={popup.children}
        ></Popup>
      )}

      {selectedImage && (
        <ImagePopup card={selectedImage} onClose={handleClosePopup} />
      )}
    </main>
  );
}
