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