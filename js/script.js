const jogos = [
  {
    nome: "Elden Ring",
    descricao: "RPG de ação em um mundo de fantasia e exploração.",
    imagem: "img/elden-ring.jpg"
  },
  {
    nome: "The Witcher 3",
    descricao: "RPG de fantasia com escolhas, monstros e aventuras.",
    imagem: "img/witcher-3.jpg"
  },
  {
    nome: "Cyberpunk 2077",
    descricao: "Aventura de ficção científica em uma cidade futurista.",
    imagem: "img/cyberpunk.jpg"
  }
];

let atual = 0;

function mostrarJogo() {
  document.getElementById("jogo-titulo").textContent = jogos[atual].nome;
  document.getElementById("jogo-desc").textContent = jogos[atual].descricao;
  document.getElementById("jogo-img").src = jogos[atual].imagem;
  document.getElementById("jogo-img").alt = jogos[atual].nome;
}

document.getElementById("anterior").addEventListener("click", () => {
  atual = (atual - 1 + jogos.length) % jogos.length;
  mostrarJogo();
});

document.getElementById("proximo").addEventListener("click", () => {
  atual = (atual + 1) % jogos.length;
  mostrarJogo();
});
