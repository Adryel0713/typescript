// const person: {name: string,idade:number} = {
//     name: "Clauber",
//     idade: 22,
// }

// type dados = {
//     name: string,
//     idade: number,
// }

// const informations: dados = {
//     name: "Clauber",
//     idade: 22,
// }

// const inform: dados = {name: "Clauber", idade: 22};

// function inf(): dados {
//     return{
//         name: "Clauber",
//         idade: 22,
//     }
// }


type User = {
    nome: string,
    idade: number,
}
const printUser = (user: User) => {
    return `Nome: ${user.nome}, Idade: ${user.idade}`;
}

const res = printUser({nome: "Adryel",idade: 22});
console.log(res)