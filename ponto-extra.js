//O Map retorna o valor da operação pra um array novo o qual pode ser impresso posteriormente.

const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

//Enquanto o forEach não retorna o valor da operação pro array novo, ele apenas apenas percorre
//todo o array e executa a operação solicitada.

// const notas = [10, 9, 8, 7, 6]

// const notasAtualizadas = notas.forEach(nota => nota == 10 ? nota : ++nota)

// console.log(notasAtualizadas)


//outro exemplo
// const numeros = [1, 2, 3, 4, 5];

// const numerosX2 = numeros.map(numero => numero*2);

// console.log(numerosX2)