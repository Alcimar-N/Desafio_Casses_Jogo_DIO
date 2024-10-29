class heroiClass {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}
	atacar() {
		return `O ${this.tipo} ${this.nome} atacou usando`;
	}
}

let heroi = new heroiClass("Zenthur", "54", "Ninja"); 

if (heroi.tipo === "Mago") {
	console.log(heroi.atacar() + " Magia");
} else if (heroi.tipo === "Guerreiro") {
	console.log(heroi.atacar() + " espada");
} else if (heroi.tipo === "Monge") {
	console.log(heroi.atacar() + " artes marciais");
} else if (heroi.tipo === "Ninja") {
	console.log(heroi.atacar() + " shuriken");
}
