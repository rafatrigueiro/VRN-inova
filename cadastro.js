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