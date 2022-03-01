const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const medias = [10, 7, 9, 6]

let listaDeAlunosEMedias = [alunos, medias] //Juntei duas listas numa só

console.log(`${listaDeAlunosEMedias[0][0]}, sua média é: ${listaDeAlunosEMedias[1][0]}`)

//Neste console conseguimos consultar os dados das listas "primárias" acessando a posição desta dentro de listaDeAlunosEMedias [0](lista: alunos), e logo depois acessando
//a posição do elemento dentro do array alunos [0] (João está na posição 0 dentro do array alunos.)