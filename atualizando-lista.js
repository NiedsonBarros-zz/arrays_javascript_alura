const listaDeChamada = ['João','Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// listaDeChamada.splice(1,3,'Niedson')
listaDeChamada.splice(1,0,'Niedson')

//o splice exige 3 parâmetros: 
//1º posição a qual iniciará a remoção; 
//2º quantidade de elementos que serão removidos a partir da posição indicada;
//3º Elemento que será adicionado ao aray

console.log(`Lista de Chamada: ${listaDeChamada}`)