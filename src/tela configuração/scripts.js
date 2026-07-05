// Captura dos elementos da página

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const telefone = document.getElementById("telefone");
const data = document.getElementById("data");
const genero = document.getElementById("genero");

const fotoPerfil = document.getElementById("fotoPerfil");
const inputFoto = document.getElementById("inputFoto");

const btnFoto = document.getElementById("btnFoto");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");
const btnSair = document.getElementById("btnSair");

// Carregar dados salvos

window.onload = function () {

    nome.value = localStorage.getItem("nome") || "";
    email.value = localStorage.getItem("email") || "";
    senha.value = localStorage.getItem("senha") || "";
    telefone.value = localStorage.getItem("telefone") || "";
    data.value = localStorage.getItem("data") || "";
    genero.value = localStorage.getItem("genero") || "";

    const foto = localStorage.getItem("fotoPerfil");

    if (foto) {
        fotoPerfil.src = foto;
    }

};

// Alterar Foto

btnFoto.addEventListener("click", function () {

    inputFoto.click();

});

inputFoto.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (e) {

        fotoPerfil.src = e.target.result;
        localStorage.setItem("fotoPerfil", e.target.result);

    };

    leitor.readAsDataURL(arquivo);

});

// Salvar Perfil

btnSalvar.addEventListener("click", function () {

    // Nome obrigatório
    if (nome.value.trim() === "") {
        alert("Preencha o nome.");
        return;
    }

    // E-mail obrigatório
    if (email.value.trim() === "") {
        alert("Preencha o e-mail.");
        return;
    }

    // Verifica se o e-mail possui "@"
    if (!email.value.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Telefone obrigatório
    if (telefone.value.trim() === "") {
        alert("Preencha o telefone.");
        return;
    }

    // Remove tudo que não for número
    const telefoneNumeros = telefone.value.replace(/\D/g, "");

    // Aceita somente 10 ou 11 dígitos
    if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
        alert("Digite um telefone válido com 10 ou 11 dígitos.");
        return;
    }

    // Salva no Local Storage
    localStorage.setItem("nome", nome.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("senha", senha.value);
    localStorage.setItem("telefone", telefone.value);
    localStorage.setItem("data", data.value);
    localStorage.setItem("genero", genero.value);

    alert("Perfil salvo com sucesso!");

});

// Cancelar Alterações

btnCancelar.addEventListener("click", function () {

    if (confirm("Cancelar as alterações?")) {

        nome.value = localStorage.getItem("nome") || "";
        email.value = localStorage.getItem("email") || "";
        senha.value = localStorage.getItem("senha") || "";
        telefone.value = localStorage.getItem("telefone") || "";
        data.value = localStorage.getItem("data") || "";
        genero.value = localStorage.getItem("genero") || "";

        const foto = localStorage.getItem("fotoPerfil");

        if (foto) {
            fotoPerfil.src = foto;
        }

    }

});

// Sair da Conta

btnSair.addEventListener("click", function () {

    if (confirm("Deseja realmente sair da conta?")) {

        // Remove apenas a sessão do usuário
        localStorage.removeItem("usuarioLogado");

        // Redireciona para a tela de login
        window.location.href = "login.html";

    }

});