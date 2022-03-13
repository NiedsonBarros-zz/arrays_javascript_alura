// const arrayVazia = [,,,];

// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])
// // console.log(`Array concatenado:${arrayConcat}.`);
// // console.log(`Array original: ${arrayOriginal}.`);

// console.log(arrayConcat)
// console.log(arrayOriginal)

//Exemplos de array reduce()
const numeros = [40, 50, 65, 12]

//Usando arrow function
// const soma = numeros.reduce((acum, atual) => atual + acum, 0)

//Usando function
// const soma = numeros.reduce(function (acum, atual) {
// return atual + acum
// }, 0)

//Declarando o reduce fora da function
function operacaoNumerica(acum, atual){
    return atual + acum
}
const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma)
