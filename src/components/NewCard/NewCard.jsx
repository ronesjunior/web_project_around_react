export default function NewCard() {
  return (
    <form id="popup-add-card__form" class="popup-add-card__form" novalidate>
      <input
        class="popup-add-card__entrada"
        type="text"
        id="titulo"
        name="titulo"
        placeholder="Título"
        required
        minlength="2"
        maxlength="30"
      />
      <span class="titulo-error"></span>

      <input
        class="popup-add-card__entrada"
        type="url"
        id="link"
        name="link"
        placeholder="Link de imagem"
        required
      />
      <span class="link-error"></span>

      <button
        type="submit"
        id="popup-add-card__criar-botao"
        class="popup-add-card__criar-botao popup-add-card__criar-botao_inativo"
        disabled
      >
        Salvar
      </button>
    </form>
  );
}
