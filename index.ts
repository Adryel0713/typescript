interface Filme{
    readonly nome: string,
    avaliacao: number,
    categoria: string,
    Dados(): string;
}

interface Cinema extends Filme{
    desconto?: number,
    preco: number,
    pago?: number,
    status: string,
    Valor(preco:number,pago: number): string;
}

const cliente: Cinema = {
    nome: "Harry Potter",
    avaliacao: 8,
    categoria: "ficção",
    desconto: 5,
    preco: 10,
    status: "PENDENTE",
    Valor(preco,pago) {
        this.preco = preco - pago;
        if(preco < pago){
            this.status = "Faltou troco, espera.."
            preco = 0;
        }else if(preco - pago === 0){
            this.status = "PAGO!"
        }else{
            this.status = "PENDENTE"
        }
        return this.status;
    },
    Dados() {
        return `${this.nome}, ${this.avaliacao}, ${this.categoria}, ${this.desconto}, ${this.preco}, ${this.status}`
    },
}

console.log(cliente.Valor(5,10))
console.log(cliente.Dados())