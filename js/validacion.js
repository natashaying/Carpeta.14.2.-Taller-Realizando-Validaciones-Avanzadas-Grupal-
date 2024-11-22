// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");

    // Validar contraseñas en tiempo real
    password2.addEventListener("input", () => {
      if (password1.value !== password2.value) {
        password2.setCustomValidity("Las contraseñas no coinciden.");
      } else {
        password2.setCustomValidity("");
      }
    });

    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });