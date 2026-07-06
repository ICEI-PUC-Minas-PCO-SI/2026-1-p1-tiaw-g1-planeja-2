const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");

const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");

function mostrarLogin() {
    formLogin.classList.remove("oculto");
    formCadastro.classList.add("oculto");

    btnLogin.classList.add("ativo");
    btnCadastro.classList.remove("ativo");
}

function mostrarCadastro() {
    formCadastro.classList.remove("oculto");
    formLogin.classList.add("oculto");

    btnCadastro.classList.add("ativo");
    btnLogin.classList.remove("ativo");
}

function buscarUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nomeCadastro").value.trim();
    const email = document.getElementById("emailCadastro").value.trim().toLowerCase();
    const senha = document.getElementById("senhaCadastro").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não conferem.");
        return;
    }

    const usuarios = buscarUsuarios();

    const usuarioExiste = usuarios.some((usuario) => usuario.email === email);

    if (usuarioExiste) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    const novoUsuario = {
        id: Date.now(),
        nome,
        email,
        senha
    };

    usuarios.push(novoUsuario);

    salvarUsuarios(usuarios);

    alert("Cadastro realizado com sucesso!");

    mostrarLogin();

    formCadastro.reset();
});

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("emailLogin").value.trim().toLowerCase();
    const senha = document.getElementById("senhaLogin").value;

    if (!email || !senha) {
        alert("Preencha e-mail e senha.");
        return;
    }

    const usuarios = buscarUsuarios();

    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (!usuarioEncontrado) {
        alert("E-mail ou senha inválidos.");
        return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    window.location.href = "../dashboard/index.html";
});