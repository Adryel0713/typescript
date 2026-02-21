interface Conta {
    num: string,
    saldo: number,
    Exibir(num: string, saldo: number): string
}

const Adryel: Conta = {
    num: "",
    saldo: 0,
    Exibir(num,saldo){
        return `Número da conta: ${num}, saldo: ${saldo}`;
    }
}

console.log(Adryel.Exibir("4002892222",200))