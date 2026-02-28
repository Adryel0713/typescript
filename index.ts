const filtrar = <T>(array: T[], condition: (condicao: T) => boolean): T[] => {
    return array.filter((item) => condition(item));
}

const itens = [1,2,3,4,5,6,7,8,9,10]
const itensFiltrados = filtrar<number>(itens, (item) => item % 2 === 0);

console.log(itensFiltrados)