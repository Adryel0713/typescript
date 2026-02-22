interface Carro {
    placa: string,
    Run(): void;
}
interface Carro {
    placaNova: string;
    Stop(): void;
}

const vehicle: Carro = {
    placa: "21A",
    placaNova: "213ASWDAD",
    Run() {
        console.log("RUUUNNNNNNNN!")
    },
    Stop() {
        console.log("Stoped.")
    }
}

vehicle.Run()
vehicle.Stop()