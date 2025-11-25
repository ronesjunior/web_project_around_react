export default function EditProfile() {
  return (
    <form id="popup__form" class="popup__form" novalidate>
      <input
        class="popup__input"
        type="text"
        id="nome"
        name="nome"
        placeholder="Nome"
        required
        minlength="2"
        maxlength="40"
      />
      <span class="nome-error"></span>

      <input
        class="popup__input"
        type="text"
        id="sobre"
        name="sobre"
        placeholder="Sobre mim"
        required
        minlength="2"
        maxlength="200"
      />
      <span class="sobre-error"></span>

      <button
        type="submit"
        id="popup__button"
        class="popup__button popup__button_disabled"
        disabled
      >
        Salvar
      </button>
    </form>
  );
}
