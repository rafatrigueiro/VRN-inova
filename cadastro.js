document.getElementById("btnCadastrar").addEventListener("click", function() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
  
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    alert(`Cadastro realizado!\nNome: ${nome}\nE-mail: ${email}`);
    window.location.href = "menu.html"; // redireciona para o menu

  });
document.getElementById("btnCadastrar").addEventListener("click", function() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (nome === "" || email === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // salva no navegador (opcional, pra login funcionar depois)
  localStorage.setItem("usuarioNome", nome);
  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("usuarioSenha", senha);

  // avança para o jogo
  window.location.href = "jogo.html";
});
