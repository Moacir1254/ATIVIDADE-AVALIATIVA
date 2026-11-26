document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("formMatricula");
    var msgErro = document.getElementById("mensagemErro");
    var btnLimpar = document.getElementById("btnLimpar");

    if (form) {
        form.addEventListener("submit", function (evento) {
            var nomeAtleta = document.getElementById("nomeAtleta").value.trim();
            var dataNasc = document.getElementById("dataNascimento").value;
            var categoria = document.getElementById("categoria").value;
            var posicao = document.getElementById("posicao").value;
            var nomeResp = document.getElementById("nomeResponsavel").value.trim();
            var telefone = document.getElementById("telefone").value.trim();
            var email = document.getElementById("email").value.trim();
            var aceito = document.getElementById("aceito").checked;

            if (
                nomeAtleta === "" ||
                dataNasc === "" ||
                categoria === "" ||
                posicao === "" ||
                nomeResp === "" ||
                telefone === "" ||
                email === ""
            ) {
                evento.preventDefault();
                msgErro.textContent = "Preencha todos os campos obrigatórios antes de enviar.";
                msgErro.classList.remove("d-none");
                return;
            }

            if (!aceito) {
                evento.preventDefault();
                msgErro.textContent = "Marque a caixa confirmando que os dados são verdadeiros.";
                msgErro.classList.remove("d-none");
                return;
            }

            msgErro.classList.add("d-none");
        });
    }

    if (btnLimpar && form) {
        btnLimpar.addEventListener("click", function () {
            form.reset();
            if (msgErro) {
                msgErro.classList.add("d-none");
            }
        });
    }
});