class GetSet {
    private idade: number;

    constructor(idade: number){
        this.idade = idade;
    }

    get myIdade(): number {
        return this.idade;
    }
    set myIdade(idade: number) {
        this.idade = idade;
    }
}

const teste = new GetSet(3);
console.log(teste.myIdade)
teste.myIdade = 20;
console.log(teste.myIdade)