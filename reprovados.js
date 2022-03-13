// const nomes = ['Ana','Marcos','Maria','Mauro']
// const notas = [7, 4.5, 8, 7.5]

// const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

// console.log(`reprovados: ${reprovados}`)

const modelos = ['Gol', 'Marea', 'Corolla', 'Civic', 'HB20']
const quantidadesVendidas = [58, 10, 5, 2, 254]

const vendasMaiores100 = modelos.filter((_,indice) => quantidadesVendidas[indice] === 58)

console.log(`O campeão de vendas foi: ${vendasMaiores100}`)