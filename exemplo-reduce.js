// const produtos = [
// {
//     nome: "Iphone",
//     preco: 2100
// },
// {
//     nome: "Notebook",
//     preco: 2500
// },
// {
//     nome: "Fone de Ouvido",
//     preco: 25
// }
// ]

// const total = produtos.reduce((a, b) => a + b.preco, 0)

// console.log(total)

//Praticando Arrays

let carros = ['Gol', 'Marea', 'Corolla', 'Civic', 'HB20']
let quantidadesVendidas = [58, 10, 5, 2, 254]
let corVendida = ['azul', 'prata', 'preto', 'preto', 'cinza']

const corFiltro = 'preto'

const carrosVendidos = carros.filter((_, i) => corVendida[i] === corFiltro)
const qtVend = quantidadesVendidas.filter((_, i) => corVendida[i] === corFiltro).reduce((ac, at) => at + ac, 0)
const vendasPorModelo = quantidadesVendidas.filter((_, i) => corVendida[i] === corFiltro)

for (i = 0; i < Object.keys(carrosVendidos).length; i++){
    console.log('Modelo: ' + carrosVendidos[i] + ' Quantidade: ' +  vendasPorModelo[i]);
}

// console.log('##### RESUMO #####')
// console.log(`Os carros vendidos na cor preta são: ${carrosVendidos}, somando um total de ${qtVend} unidades.`)





// let carros = ['Gol', 'Marea', 'Corolla', 'Civic', 'HB20']
// let quantidadesVendidas = [58, 10, 5, 2, 254]
// let corVendida = ['azul', 'prata', 'preta', 'preta', 'cinza']

// const corFiltro = 'preta' //-- REPETIU MUITO NO CODIGO PODE VIRAR VARIAVEL

// const carrosVendidos = carros.filter((_, i) => corVendida[i] === corFiltro)
// const totalVendido = quantidadesVendidas.filter((_, i) => corVendida[i] === corFiltro).reduce((ac, at) => at + ac, 0)
// const vendasPorModelo = quantidadesVendidas.filter((_, i) => corVendida[i] === corFiltro) //--- RETORNA [5, 2]


// //--- COMO TEMOS 2 OBJETOS (ARRAY) Distintos, temos que imprimir no mesmo indice.
// for (i = 0; i < Object.keys(carrosVendidos).length; i++) {    
//     console.log('Modelo: ' + carrosVendidos[i] + ' Quantidade: ' +  vendasPorModelo[i]); //-- AQUI VOCE PODERIA ADICIONAR EM UM ARRAY STRING.. E IMPRIMIR TUDO NO SEU CONSOLE LOG
// }

// console.log('###### RESUMO ########')
// console.log(`Os carros vendidos na cor ${corFiltro} são: ${carrosVendidos}, somando um total de ${totalVendido} unidades.`)

