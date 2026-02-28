type empregado = {
    id: number,
    nome: string
}

type chefe = {
    departament: string,
    role: string
}

type ambos = empregado & chefe;

const manager: ambos = {
    id: 1,
    nome: "Clauber",
    departament: "Finanças",
    role: "admin"
}

console.log(manager.id)
console.log(manager.nome)
console.log(manager.departament)
console.log(manager.role)