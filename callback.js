// const nomes = ["Ana","Ju","Niedson","Raisa"]

// nomes.forEach(nome =>{
//     console.log(nome)
// })




// function imprimeNomes(nome){
//     console.log(nome)
// }


//ForEach Tabuada (Tabuada de 0 a 10)

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mult = 0;

numeros.forEach(index=>{
   
if(mult < numeros.length){
numeros.forEach((tabuada, index)=>{
    console.log(`${mult} X ${index} é: ${tabuada* mult}.`)
}
)}
mult++;
})

// numeros.forEach((tabuada, index)=>{
//     console.log(`${mult} X ${index} é: ${tabuada*1}.`)
// }

// )

//tabuada com function normal
// function tabuada(){
// for(i = 0; i < numeros.length; i++){
//     console.log(numeros[i] * 1);
// }
// }

// tabuada();






