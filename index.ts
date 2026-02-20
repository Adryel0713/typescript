type Status = "Sucesso" | "Fracasso";

const handle =(status: Status) => {

    if(status === "Sucesso"){
        return;
    }else if(status === "Fracasso"){
        return;
    }
    const verify: never = status;

}
