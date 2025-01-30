    //armagenando filmes dentro de um array e mostrando ao usuario os elemntos desse array

const filmes=[]

for(let i=0; i<5; i++){
    let NomeFilmes=prompt('digite o nome do fime')
    filmes.push(NomeFilmes)
}

console.log(filmes)