class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(inimigo) {
        let dano = this.ataque - inimigo.defesa;
        if (dano > 0) {
            inimigo.vida -= dano;
        }
    }
}

class Jogador extends Personagem {
    constructor(nome, vida, ataque, defesa, nivel) {
        super(nome, vida, ataque, defesa);
        this.nivel = nivel;
    }
}

class Inimigo extends Personagem {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa);
    }
}


let jogador = new Jogador("Herácles", 100, 20, 5, 1);
let inimigo = new Inimigo("Espantalho", 100, 15, 3);


function atualizarStatus() {
    document.getElementById("player-hp").innerText = `Vida: ${jogador.vida}`;
    document.getElementById("enemy-hp").innerText = `Vida: ${inimigo.vida}`;
}


function verificarFimDeJogo() {
    if (inimigo.vida <= 0) {
        alert("Herácles derrotou Espantalho!");
    } else if (jogador.vida <= 0) {
        alert("Espantalho derrotou Herácles!");
    }
}


document.getElementById("attack-btn").addEventListener("click", () => {
    jogador.atacar(inimigo);
    if (inimigo.vida > 0) {
        inimigo.atacar(jogador);
    }
    atualizarStatus();
    verificarFimDeJogo();
});

atualizarStatus();
