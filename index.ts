class Dog {
    latido(): void {
        console.log("AUAU")
    }
}

class Cat {
    miau(): void {
        console.log("MIAU")
    }
}

const somAnimal = (som: Dog | Cat): void => {
    if(som instanceof Dog){
        som.latido();
    }else{
        som.miau();
    }
}

const myDog = new Dog();
const myCat = new Cat();

somAnimal(myDog);
somAnimal(myCat);