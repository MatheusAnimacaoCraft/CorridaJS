function setup() {
  createCanvas(400, 400);
}

let xJogador = [350, 350, 350, 350];
let yJogador = [75, 150, 225, 300];
let jogador = ["🚗", "🏎️", "🏍️", "🛻"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(35, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(35, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] < 0) {
      fill("rgba(0,0,0,0.5)");
      rect(50, 150, 250, 100);
      fill("white");
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

let teclas = ["a", "s", "d", "f"];
let teclasA = ["A", "S", "D", "F"];

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i] || key == teclasA[i]) {
      xJogador[i] += random(-20);
    }
  }
}
