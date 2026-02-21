class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string,age: number, species: string){
        this.name = name;
        this.age = age;
        this.species = species;
    }

    protected getName(): string {
        return this.name;
    }
    protected getAge(): number{
        return this.age;
    }
    protected getSpecies(): string{
        return this.species;
    }
}

class Dog extends Animal{
    constructor(name: string,age: number){
        super(name,age,"Canine")
    }

    public getInfo(): string {
        return `${this.name} is a ${this.getSpecies()} and is ${this.getAge()} years old.`
    }
}

const cachorro = new Dog("Pinsher",3);
console.log(cachorro.getInfo())