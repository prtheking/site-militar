   // Botão "voltar ao topo"
   window.onscroll = function () {
    const btn = document.getElementById("topoBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Menu responsivo
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }

  // Boas-vindas com hora do dia
  function mostrarBoasVindas() {
    const agora = new Date();
    const hora = agora.getHours();
    let mensagem;

    if (hora < 12) {
      mensagem = "Bom dia! Honra e coragem ao amanhecer.";
    } else if (hora < 18) {
      mensagem = "Boa tarde! Seguimos firmes na defesa da pátria.";
    } else {
      mensagem = "Boa noite! O dever nunca descansa.";
    }

    document.getElementById("boasVindas").innerText = mensagem;
  }
  // Mostrar botão de "voltar ao topo" quando rolar
function configurarBotaoTopo() {
    const topoBtn = document.getElementById("topoBtn");
  
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      topoBtn.style.display = scrolled > 200 ? "block" : "none";
    });
  
    topoBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  // Alternar visibilidade do menu responsivo
  function configurarMenuResponsivo() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");
  
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
  
  // Exibir mensagem de boas-vindas com base na hora
  function exibirMensagemBoasVindas() {
    const mensagemEl = document.getElementById("boasVindas");
    const hora = new Date().getHours();
    let mensagem = "";
  
    if (hora < 12) {
      mensagem = "Bom dia! Honra e coragem ao amanhecer.";
    } else if (hora < 18) {
      mensagem = "Boa tarde! Seguimos firmes na defesa da pátria.";
    } else {
      mensagem = "Boa noite! O dever nunca descansa.";
    }
  
    mensagemEl.textContent = mensagem;
  }
  
  // Inicializar tudo ao carregar a página
  function iniciarSite() {
    configurarBotaoTopo();
    configurarMenuResponsivo();
    exibirMensagemBoasVindas();
  }