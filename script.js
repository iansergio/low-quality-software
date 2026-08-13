document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("formLogin");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function () {
        console.warn(
            "O login não valida as credenciais " +
            "e envia usuário e senha através de GET."
        );
    });
});
