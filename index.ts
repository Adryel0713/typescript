const filter = <T>(array: T[], condition: (item: T) => boolean): T[] => {
    return array.filter((item) => condition(item));
}

interface fruits {
    name: string,
    color: string
}

const FruitArray: fruits[] = [
    {
        name: "Maçã",
        color: "Vermelha"
    },
    {
        name: "Banana",
        color: "Amarela"
    },
    {
        name: "Uva",
        color: "Azul-Violeta"
    },
    
]

const redFruit = filter<fruits>(FruitArray, (item) => item.color === "Vermelha");
console.log(redFruit)