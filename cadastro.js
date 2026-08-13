document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagemCadastro");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("cfname").value.trim();
        const senha = document.getElementById("clname").value;
        const confirmacao = document.getElementById("cconfirm").value;

        const erros = [];

        if (senha.length < 12) {
            erros.push("A senha precisa ter pelo menos 12 caracteres.");
        }

        if (!/[A-Z]/.test(senha)) {
            erros.push("A senha precisa ter uma letra maiúscula.");
        }

        if (!/[a-z]/.test(senha)) {
            erros.push("A senha precisa ter uma letra minúscula.");
        }

        if (!/[0-9]/.test(senha)) {
            erros.push("A senha precisa ter um número.");
        }

        if (!/[^A-Za-z0-9]/.test(senha)) {
            erros.push("A senha precisa ter um caractere especial.");
        }

        if (!senha.toLowerCase().includes("robso")) {
            erros.push('A senha precisa conter "robso".');
        }

        if (senha !== confirmacao) {
            erros.push("As senhas não são iguais.");
        }

        if (!usuario) {
            erros.push("Informe um usuário.");
        }

        if (erros.length > 0) {
            mensagem.innerHTML = erros
                .map(erro => "• " + erro)
                .join("<br>");

            mensagem.className = "error";
            return;
        }

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);

        mensagem.textContent =
            "Cadastro realizado!";

        mensagem.className = "success";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 800);
    });
});
