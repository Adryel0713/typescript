type value = string | number;

const verify = (value: value): void => {

    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
}

verify("tst")
verify(2)