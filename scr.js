document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");

  if (passwordInput && togglePasswordButton) {
    togglePasswordButton.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      if (type === "password") {
        this.textContent = "Show";
      } else {
        this.textContent = "Hide";
      }
    });
  }

  // PREVENT FORM RELOADING
  // const loginForm = document.getElementById("login-form");
  // if (loginForm) {
  //   loginForm.addEventListener("submit", function (event) {
  //     event.preventDefault();
  //     alert("Form disubmit! (Fungsi login akan diproses di sini)");
  //   });
  // }
});
