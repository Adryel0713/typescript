interface Human {
    name: string,
    age: number
}

let person: Human = {
    name: "Adryel",
    age: 22
}

console.log(person.name)
console.log(person.age)


/////////////////////////////////

interface Movies {
    readonly name: string,
    ratings: number,
    genra?: string
}

const movie: Movies = {
    name: "Velozes e Furiosos",
    ratings: 7.8,
    genra: "Action"
}

console.log(movie)

/////////////////////////////////

interface Calc {
    (a: number,b:number): number;
}

const soma: Calc = (a,b) => {
    return a + b;
}
const sub: Calc = function (a,b) {
    return a - b;
}
