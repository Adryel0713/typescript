function valores<Type>(n1: Type, n2:Type): [Type,Type] {
    return [n1,n2];
}

const num = valores<number>(2,3);
const str = valores<string>("2","3");
const bool = valores<boolean>(true,false);
