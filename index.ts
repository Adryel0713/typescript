type People = {
    name: string,
    idade: number
}

type Employee = {
    salary?: number,
    function: string
}

type Job = People & Employee;

const Adr: Job = {
    name: "Adryel",
    idade: 22,
    // salary: 200.0,
    function: "Gerente"
}

console.log(Adr)