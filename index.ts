type User = {
    email?: string,
    name: string,
    age: number,
    readonly cpf: string,
}

// readonly -> NUNCA PODERÁ SER MUDADO DEPOIS DE DECLARADO

const Adryel: User = {
    email: "adryel0713@gmail.com",
    name: "Adryel",
    age: 22,
    cpf: "000.000.000-00"
}
Adryel.age = 23;
console.log(`Email: ${Adryel.email}, name: ${Adryel.name}, age: ${Adryel.age}, cpf: ${Adryel.cpf}`)