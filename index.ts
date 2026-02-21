interface Human {
    name: string,
    age: number,
    Falar(): void;
}

function great(person: Human) {
    console.log(`${person.name}, ${person.age}`);
    person.Falar();
}

const person1: Human = {
    name: "Adryel",
    age: 22,
    Falar() {
        console.log("Olá!")
    }
}
const person2: Human = {
    name: "Daniel",
    age: 17,
    Falar() {
        console.log("Tranquilo?")
    }
}

great(person1)
great(person2)