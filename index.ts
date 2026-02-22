//Gera valores e chaves aleatórias
const sorteio = <T>(objeto: {[chave: string]: T}): {
    chave: string;
    valor: T;
} => {
    const chaves = Object.keys(objeto);
    const random = chaves[Math.floor(Math.random() * chaves.length)];

    return {
        chave: random,
        valor: objeto[random],
    }
}

const numeros = {
    n1: 5,
    n2: 4,
    n3: 3,
    n4: 2,
    n5: 1
}
const res = sorteio<number>(numeros)

const caracteres = {
    um: "um",
    dois: "dois",
    tres: "tres"
}

const res2 = sorteio<string>(caracteres)

console.log(res)
console.log(res2)