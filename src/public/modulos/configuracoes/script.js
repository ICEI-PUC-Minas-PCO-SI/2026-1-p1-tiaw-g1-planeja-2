document.addEventListener("DOMContentLoaded", function () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        window.location.href = "index.html";
        return;
    }

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

    function carregarDados() {
        nome.value = usuarioLogado.nome || "";
        email.value = usuarioLogado.email || "";
        senha.value = usuarioLogado.senha || "";
        telefone.value = usuarioLogado.telefone || "";
        data.value = usuarioLogado.dataNascimento || "";
        genero.value = usuarioLogado.genero || "";

        if (usuarioLogado.foto) {
            fotoPerfil.src = usuarioLogado.foto;
        }
    }

    btnFoto.addEventListener("click", function () {
        inputFoto.click();
    });

    inputFoto.addEventListener("change", function () {
        const arquivo = inputFoto.files[0];

        if (!arquivo) return;

        const leitor = new FileReader();

        leitor.onload = function (e) {
            fotoPerfil.src = e.target.result;
        };

        leitor.readAsDataURL(arquivo);
    });

    btnSalvar.addEventListener("click", function () {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioAtualizado = {
            ...usuarioLogado,
            nome: nome.value.trim(),
            email: email.value.trim().toLowerCase(),
            senha: senha.value,
            telefone: telefone.value.trim(),
            dataNascimento: data.value,
            genero: genero.value,
            foto: fotoPerfil.src
        };

        const usuariosAtualizados = usuarios.map((usuario) =>
            usuario.id === usuarioLogado.id ? usuarioAtualizado : usuario
        );

        localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));

        alert("Perfil salvo com sucesso!");
        location.reload();
    });

    btnCancelar.addEventListener("click", function () {
        carregarDados();
    });

    btnSair.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "index.html";
    });

    carregarDados();

    function carregarUsuarioMenu() {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

        if (!usuarioLogado) return;

        const nomeUsuarioMenu = document.getElementById("nomeUsuarioMenu");
        const fotoUsuarioMenu = document.getElementById("fotoUsuarioMenu");

        if (nomeUsuarioMenu) {
            nomeUsuarioMenu.innerText = usuarioLogado.nome || "Usuário";
        }

        if (fotoUsuarioMenu && usuarioLogado.foto) {
            fotoUsuarioMenu.src = usuarioLogado.foto;
        }
    }

    carregarUsuarioMenu();
});