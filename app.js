document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const input = form.querySelector(".form__input");
  const errorSpan = form.querySelector(".form__error");
  const successSpan = form.querySelector(".form__success");

  const validate = (event) => {
    event.preventDefault();

    if (!input.validity.valid) {
      errorSpan.textContent = "Please provide a valid email address";
      input.classList.add("invalid-input");
      input.setAttribute("aria-invalid", "true");
      successSpan.textContent = ""; // Removemos o texto da mensagem de sucesso
    } else {
      errorSpan.textContent = "";
      input.classList.remove("invalid-input");
      input.removeAttribute("aria-invalid");
      successSpan.textContent = "Form submitted successfully!";
    }
  };

  form.addEventListener("submit", validate);
});
