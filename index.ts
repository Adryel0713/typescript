let password: string | number = "Teste"; // 5 "5" "oi" | (ERR0R) -> true

type Basic = {
    name: string,
    age: number
}
type Login = {
    email: string,
    password: string
}

const user: Basic | Login = {
    // name: "Clauber",
    // age: 22,

    email: "teste@gmail.com",
    password: "teste"
}

const array: (string | number)[] = ["t",5,7,"323","AD"] //ERROR -> true,false