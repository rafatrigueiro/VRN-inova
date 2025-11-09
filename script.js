
let nivel = 0;
let pontos = 0;
let tentativas = 0;
let faseOcultaAtiva = false;
let nivelOculto = 0;
const VIDAS = 5; // quantidade de corações/vidas

const desafios = [
    { pergunta: "Complete a palavra: C__SA", resposta: "CASA" },
  { pergunta: "Qual a cor do sol?", resposta: "AMARELO" },
  { pergunta: "Qual animal faz 'au-au'?", resposta: "CACHORRO" },
  { pergunta: "Complete a palavra: B__LA", resposta: "BOLA" },
  { pergunta: "Qual o oposto de claro?", resposta: "ESCURO" },
  { pergunta: "Complete a palavra: G__TO", resposta: "GATO" },
  { pergunta: "O que a galinha bota?", resposta: "OVO" },
  { pergunta: "Complete a palavra: P__TO", resposta: "PATO" },
  { pergunta: "O que usamos para comer a sopa?", resposta: "COLHER" },
];

const fasesOcultas = [
  { pergunta: "🌀 FASE OCULTA 1: Complete o verbo: C__RRER", resposta: "CORRER" },
  { pergunta: "🌀 FASE OCULTA 2: Complete o verbo: B__RINCAR", resposta: "BRINCAR" },
  { pergunta: "🌀 FASE OCULTA 3: Complete o substantivo: S__L", resposta: "SOL" },
  { pergunta: "🌀 FASE OCULTA 4: Complete o verbo: D__RMI__", resposta: "DORMIR" },
  { pergunta: "🌀 FASE OCULTA 5: Complete o substantivo: F__OR", resposta: "FLOR" }
];


// Iniciar o jogo
function iniciarJogo() {
  window.location.href = "jogo.html";
}

// Exibir vidas (corações) na tela
function mostrarVidas() {
  const vidasContainer = document.getElementById("vidas");
  if (vidasContainer) {
    let coracoes = "";
    for (let i = 0; i < VIDAS - tentativas; i++) coracoes += "❤️ ";
    for (let i = 0; i < tentativas; i++) coracoes += "🖤 ";
    vidasContainer.innerHTML = coracoes;
  }
}

// Carregar desafios
function carregarDesafio() {
  mostrarVidas();

  if (!faseOcultaAtiva && nivel < desafios.length) {
    document.getElementById("pergunta").innerText = desafios[nivel].pergunta;
    document.getElementById("resposta").value = "";
    document.getElementById("feedback").innerText = "";
  } else if (nivel >= desafios.length && !faseOcultaAtiva) {
    faseOcultaAtiva = true;
    nivelOculto = 0;
    carregarFaseOculta();
  } else if (faseOcultaAtiva) {
    carregarFaseOculta();
  } else {
    mostrarCreditos();
  }
}

// Carregar fase oculta
function carregarFaseOculta() {
  mostrarVidas();

  if (nivelOculto < fasesOcultas.length) {
    document.getElementById("pergunta").innerText = fasesOcultas[nivelOculto].pergunta;
    document.getElementById("resposta").value = "";
    document.getElementById("feedback").innerText = "";
  } else {
    mostrarCreditos();
  }
}

// Verificar resposta
function verificarResposta() {
    let resposta = document.getElementById("resposta").value.trim().toUpperCase();
    let feedback = document.getElementById("feedback");
  
    let correta = !faseOcultaAtiva 
      ? desafios[nivel].resposta.toUpperCase() 
      : fasesOcultas[nivelOculto].resposta.toUpperCase();
  
    if (resposta === correta) {
      pontos += 10;
      feedback.innerText = "✅ Correto! Pontos: " + pontos;
  
      if (!faseOcultaAtiva) {
        nivel++;
        setTimeout(carregarDesafio, 1500);
      } else {
        nivelOculto++;
        setTimeout(carregarFaseOculta, 1500);
      }
      
      
  
    } else {
      tentativas++;
      mostrarVidas();
      
  
      if (tentativas >= VIDAS) {
        // Mostrar mensagem de que o jogo será reiniciado
        feedback.innerHTML = "❌ Você perdeu todas as vidas! O jogo será reiniciado em 3 segundos...";
        
        // Bloqueia a entrada do usuário
        document.getElementById("resposta").disabled = true;
        document.querySelector(".btn-principal-game").disabled = true;
  
        // Reinicia o jogo após 3 segundos
        setTimeout(() => {
          reiniciarJogo();
          document.getElementById("resposta").disabled = false;
          document.querySelector(".btn-principal-game").disabled = false;
        }, 3000);
  
      } else {
        feedback.innerText = `❌ Resposta incorreta!`;
      }
    }
  }

// Reiniciar o jogo
function reiniciarJogo() {
  nivel = 0;
  pontos = 0;
  tentativas = 0;
  faseOcultaAtiva = false;
  nivelOculto = 0;
  carregarDesafio();
}

// Tela final de créditos
function mostrarCreditos() {
  let coracoes = "";
  for (let i = 0; i < VIDAS - tentativas; i++) coracoes += "❤️ ";
  for (let i = 0; i < tentativas; i++) coracoes += "🖤 ";

  document.body.innerHTML = `
    <div class="container-game">
      <img src="cruzeiro.png" class="logo-cruzeiro" alt="Logo Cruzeiro">
      <h2 class="titulo-cadastro-game">🏁 Fim de Jogo!</h2>
      <p>Pontuação final: <strong>${pontos}</strong></p>
      <p>Vidas restantes: <span style="font-size:1.5em;">${coracoes}</span></p>
      <p class="creditos">Desenvolvido por <strong>VRN INOVA ⚡</strong></p>
      <button class="btn-principal-game" onclick="reiniciarJogo()">Jogar Novamente</button>
    </div>
  `;
  
  
  
  ocument.getElementById("btnCadastrar").addEventListener("click", function() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
  
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    alert(`Cadastro realizado!\nNome: ${nome}\nE-mail: ${email}`);
    window.location.href = "menu.html"; // leva para menu
  });
  
  // Login
  document.getElementById("btnLogin").addEventListener("click", function(event) {
    let email = document.getElementById("emailLogin").value.trim();
    let senha = document.getElementById("senhaLogin").value.trim();
  
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    alert(`Login realizado com sucesso!\nE-mail: ${email}`);
    window.location.href = "menu.html"; // leva para menu
  });
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
  
  
    }
    const somAcerto = document.getElementById("som-acerto");
const somErro = document.getElementById("som-erro");
let audioLiberado = false;

// Libera áudio após primeiro clique ou tecla
function liberarAudio() {
  if (!audioLiberado) {
    somAcerto.play().then(()=>somAcerto.pause()).catch(()=>{});
    somErro.play().then(()=>somErro.pause()).catch(()=>{});
    audioLiberado = true;
  }
}
document.addEventListener("click", liberarAudio, {once:true});
document.addEventListener("keydown", liberarAudio, {once:true});
function verificarResposta() {
    const somAcerto = document.getElementById("som-acerto");
    const somErro = document.getElementById("som-erro");

    let resposta = document.getElementById("resposta").value.trim().toUpperCase();
    let feedback = document.getElementById("feedback");

    let correta = !faseOcultaAtiva 
        ? desafios[nivel].resposta.toUpperCase() 
        : fasesOcultas[nivelOculto].resposta.toUpperCase();

    if(resposta === correta){
        pontos += 10;
        feedback.innerText = "✅ Correto! Pontos: " + pontos;

        // toca som de acerto
        somAcerto.currentTime = 0;
        somAcerto.play().catch(()=>{});

        if(!faseOcultaAtiva){
            nivel++;
            setTimeout(carregarDesafio,1500);
        } else {
            nivelOculto++;
            setTimeout(carregarFaseOculta,1500);
        }
    } else {
        tentativas++;
        mostrarVidas();

        // toca som de erro
        somErro.currentTime = 0;
        somErro.play().catch(()=>{});

        if(tentativas >= VIDAS){
            feedback.innerHTML = "❌ Você perdeu todas as vidas! Reiniciando em 3s...";
            document.getElementById("resposta").disabled = true;
            document.querySelector(".btn-principal-game").disabled = true;
            setTimeout(()=>{
                reiniciarJogo();
                document.getElementById("resposta").disabled = false;
                document.querySelector(".btn-principal-game").disabled = false;
            },3000);
        } else {
            feedback.innerText = "❌ Resposta incorreta!";
        }
    }
}
// Tela final de Créditos
function mostrarCreditos() {
  // Substitui o corpo da página por uma tela de encerramento
  document.body.innerHTML = `
    <div class="container-game">
      <img src="cruzeiro.png" alt="Logo Cruzeiro" class="logo-cruzeiro">
      <h2 class="titulo-cadastro-game">🏁 Fim do Jogo!</h2>

      <p>Pontuação final: <strong>${pontos}</strong></p>
      <p>Vidas restantes: 
        <span style="font-size: 1.5em;">
          ${"❤️".repeat(VIDAS - tentativas)}${"🖤".repeat(tentativas)}
        </span>
      </p>

      <div class="creditos-final">
        <h3>Créditos</h3>
        <p><strong>Jogo:</strong> VRN Inova</p>
        <p><strong>Desenvolvido por:</strong> Equipe VRN inova</p>
        <p><strong>Professor Orientador:</strong> [João]</p>
        <p><strong>Instituição:</strong> [Universidade cruzeiro do sul]</p>
        <p><strong>Ano:</strong> 2025</p>
      </div>

      <button class="btn-principal-game" onclick="window.location.href='menu.html'">Voltar ao Menu</button>
    </div>
  `;

  // Estilo temporário (pode mover pro CSS depois)
  const estiloCreditos = document.createElement("style");
  estiloCreditos.innerHTML = `
    body {
      background: linear-gradient(180deg, #4f46e5, #1e3a8a);
      color: white;
      font-family: 'Poppins', sans-serif;
    }
    .creditos-final {
      background: rgba(0,0,0,0.3);
      margin-top: 20px;
      padding: 15px;
      border-radius: 15px;
      color: white;
      font-size: 1.1em;
    }
    .creditos-final h3 {
      margin-bottom: 10px;
      font-size: 1.4em;
      text-transform: uppercase;
    }
  `;
  document.head.appendChild(estiloCreditos);
  
}
function verificarResposta() {
  const somAcerto = document.getElementById("som-acerto");
  const somErro = document.getElementById("som-erro");

  let resposta = document.getElementById("resposta").value.trim().toUpperCase();
  let feedback = document.getElementById("feedback");

  let desafioAtual = !faseOcultaAtiva 
    ? desafios[nivel] 
    : fasesOcultas[nivelOculto];

  let correta = desafioAtual.resposta.toUpperCase();

  // Lista de dicas personalizadas (adicione mais se quiser)
  const dicas = {
    "CASA": "É onde moramos 🏠",
    "AMARELO": "Cor do sol ☀️",
    "CACHORRO": "Faz 'au-au' 🐶",
    "BOLA": "Usamos para jogar futebol ⚽",
    "ESCURO": "Oposto de claro 🌙",
    "GATO": "Faz 'miau' 🐱",
    "OVO": "A galinha bota isso 🥚",
    "PATO": "Animal que adora água 🦆",
    "COLHER": "Usamos para tomar sopa 🥄",
    "CORRER": "Ação de se mover rápido 🏃‍♂️",
    "BRINCAR": "As crianças adoram fazer isso 🎮",
    "SOL": "Ilumina o dia ☀️",
    "DORMIR": "Fazemos à noite 😴",
    "FLOR": "Nasce no jardim 🌸"
  };

  if (resposta === correta) {
    pontos += 10;
    feedback.innerText = "✅ Correto! Pontos: " + pontos;

    somAcerto.currentTime = 0;
    somAcerto.play().catch(() => {});

    if (!faseOcultaAtiva) {
      nivel++;
      setTimeout(carregarDesafio, 1500);
    } else {
      nivelOculto++;
      setTimeout(carregarFaseOculta, 1500);
    }

  } else {
    tentativas++;
    mostrarVidas();

    somErro.currentTime = 0;
    somErro.play().catch(() => {});

    if (tentativas >= VIDAS) {
      feedback.innerHTML = "❌ Você perdeu todas as vidas! Reiniciando em 3s...";
      document.getElementById("resposta").disabled = true;
      document.querySelector(".btn-principal-game").disabled = true;
      setTimeout(() => {
        reiniciarJogo();
        document.getElementById("resposta").disabled = false;
        document.querySelector(".btn-principal-game").disabled = false;
      }, 3000);
    } else {
      // Mostra dica personalizada se existir
      let dica = dicas[correta] ? `💡 Dica: ${dicas[correta]}` : "Tente novamente!";
      feedback.innerText = `❌ Resposta incorreta! ${dica}`;
    }
  }
}










    
    
  
