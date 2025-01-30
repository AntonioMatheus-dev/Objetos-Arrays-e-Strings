   //Usando o for tradicional para exibir os filmes digitados pelo usuario 

console.log(" digite seus 5 filmes favoritos")
const filmes=[
    prompt('Primeiro filme: '),
    prompt('Segundo filme: '),
    prompt('Terceiro filme: '),
    prompt('Quarto filme: '),
    prompt('Quinto filme: '),
]

for(let i=0; i<filmes.length;i++){
    console.log(filmes[i]);
}

