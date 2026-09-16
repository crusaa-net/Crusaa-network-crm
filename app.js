document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const mensaje = document.getElementById("mensaje");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (
      email.toLowerCase() === "crusaanetwork@gmail.com" &&
      password === "Reforma5981"
    ) {
      mensaje.textContent = "Acceso correcto...";
      mensaje.style.color = "#22c55e";

      setTimeout(function () {
        window.location.href = "crm.html";
      }, 500);
    } else {
      mensaje.textContent = "Correo o contraseña incorrectos";
      mensaje.style.color = "#f87171";
    }
  });
});
