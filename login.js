document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault(); // impede o recarregamento da página

  const emailLogin = document.getElementById("emailLogin").value.trim();
  const senhaLogin = document.getElementById("senhaLogin").value.trim();

  const emailSalvo = localStorage.getItem("usuarioEmail");
  const senhaSalva = localStorage.getItem("usuarioSenha");

  if (emailLogin === "" || senhaLogin === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (emailLogin === emailSalvo && senhaLogin === senhaSalva) {
    alert("Login realizado com sucesso!");
    window.location.href = "jogo.html"; // redireciona para o jogo
  } else {
    alert("E-mail ou senha incorretos!");
  }
});
