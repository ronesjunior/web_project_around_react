export default function EditAvatar() {
  return (
    <form class="popup__form-avatar" name="edit-avatar-form" novalidate>
      <input
        class="popup__input popup__input_type_avatar-url"
        id="avatar-url-input"
        type="url"
        name="avatar"
        placeholder="Link do avatar"
        required
      />
      <span class="popup__error avatar-url-input-error"></span>
      <button class="popup__button popup__button_disabled" type="submit">
        Salvar
      </button>
    </form>
  );
}
