document.getElementById("btnLogin").addEventListener("click", function() {
    let email = document.getElementById("emailLogin").value.trim();
    let senha = document.getElementById("senhaLogin").value.trim();
  
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    alert(`Login realizado com sucesso!\nE-mail: ${email}`);
    window.location.href = "menu.html"; // redireciona para o menu
  });