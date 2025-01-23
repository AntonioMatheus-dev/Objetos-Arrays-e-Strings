   //Armagenando elementos dentro de um Array e depois exibindo esses elementos

let filmes=[]

for(let i=0; i< 5; i++){
    let filmeAd=prompt(`Digite o nome do filme ${i+1}`)
    filmes.push(filmeAd);
}

console.log('Seus filmes são: ')

filmes.forEach((filmeAd) => {
    console.log(filmeAd);
})
