let password: "teste" | "teste";
password = "teste"; // teste2 -> ERROR

let senha: "senha" = "senha" // senh -> ERROR

let numb: 1 | 2 | 3 = 3; // 4 -> ERROR

let array: (1 | 2)[] = [2,1,2,1,2,1,2,1,2,1,2] // 3 -> ERROR

const teste = (x: string, array: (1 | 2)[]) => {
    console.log(x,array)
};
teste("Teste",[1,2])