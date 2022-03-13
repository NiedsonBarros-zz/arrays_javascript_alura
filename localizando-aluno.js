const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const medias = [10, 7, 9, 6]

let listaDeAlunosEMedias = [alunos, medias] //Juntei duas listas numa só

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeAlunosEMedias[0].includes(nomeDoAluno)){
        let indice = listaDeAlunosEMedias[0].indexOf(nomeDoAluno)
    return `${listaDeAlunosEMedias[0][indice]} sua média é ${listaDeAlunosEMedias[1][indice]}`
    } else{
        return `${nomeDoAluno} não foi localizado.`
    }
}

console.log(exibeNomeNota('Ana'))