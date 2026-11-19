document.addEventListener('DOMContentLoaded', function () {

    var formMatricula = document.getElementById('formMatricula');

    if (formMatricula) {

        formMatricula.addEventListener('submit', function (e) {
            e.preventDefault();
            var nome = document.getElementById('nomeAtleta');
            var dataNasc = document.getElementById('dataNascimento');
            var posicao = document.getElementById('posicao');
            var categoria = document.getElementById('categoria');
            var nomeResp = document.getElementById('nomeResponsavel');
            var telefone = document.getElementById('telefone');
            var email = document.getElementById('emailResponsavel');
            var termos = document.getElementById('termos');
            limparErros();

            var valido = true;
            if (nome.value.trim() === '') {
                mostrarErro(nome, 'Por favor, informe o nome do atleta.');
                valido = false;
            }
            if (dataNasc.value === '') {
                mostrarErro(dataNasc, 'Por favor, informe a data de nascimento.');
                valido = false;
            }
            if (posicao.value === '') {
                mostrarErro(posicao, 'Selecione a posição do atleta.');
                valido = false;
            }
            if (categoria.value === '') {
                mostrarErro(categoria, 'Selecione a categoria.');
                valido = false;
            }
            if (nomeResp.value.trim() === '') {
                mostrarErro(nomeResp, 'Por favor, informe o nome do responsável.');
                valido = false;
            }
            var telPattern = /^\(\d{2}\)\s?\d\s?\d{4}-?\d{4}$/;
            if (telefone.value.trim() === '') {
                mostrarErro(telefone, 'Por favor, informe o telefone.');
                valido = false;
            } else if (!telPattern.test(telefone.value.trim())) {
                mostrarErro(telefone, 'Formato: (83) 9 1234-5678');
                valido = false;
            }
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                mostrarErro(email, 'Por favor, informe o email.');
                valido = false;
            } else if (!emailPattern.test(email.value.trim())) {
                mostrarErro(email, 'Informe um email válido.');
                valido = false;
            }
            if (!termos.checked) {
                mostrarErro(termos, 'Você precisa concordar com os termos.');
                valido = false;
            }
            if (valido) {
                window.location.href = 'obrigado.html';
            }
        });
        var btnLimpar = document.getElementById('btnLimpar');
        if (btnLimpar) {
            btnLimpar.addEventListener('click', function () {
                formMatricula.reset();
                limparErros();
            });
        }
    }
    function mostrarErro(campo, mensagem) {
        campo.classList.add('is-invalid');

        var feedback = document.createElement('div');
        feedback.classList.add('invalid-feedback');
        feedback.textContent = mensagem;
        if (campo.type === 'checkbox') {
            campo.parentElement.appendChild(feedback);
        } else {
            campo.parentElement.appendChild(feedback);
        }
    }
    function limparErros() {
        var camposInvalidos = document.querySelectorAll('.is-invalid');
        camposInvalidos.forEach(function (campo) {
            campo.classList.remove('is-invalid');
        });

        var feedbacks = document.querySelectorAll('.invalid-feedback');
        feedbacks.forEach(function (fb) {
            fb.remove();
        });
    }
    var paginaAtual = window.location.pathname.split('/').pop();
    if (paginaAtual === '' || paginaAtual === 'index.html') {
        paginaAtual = 'index.html';
    }

    var links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('active');
        }
    });
    var navToggler = document.querySelector('.navbar-toggler');
    var navCollapse = document.querySelector('.navbar-collapse');

    if (navToggler && navCollapse) {
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (navCollapse.classList.contains('show')) {
                    navToggler.click();
                }
            });
        });
    }
});

