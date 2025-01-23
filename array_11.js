   //Exibindo todos os filmes informados usando um for...of

let filmes=[];

for(let i=0; i< 5; i++){
    let filmeAd=prompt(`Digite o nome do filme ${i+1}`);
    filmes.push(filmeAd);
}

console.log('Seus filmes são: ');

for (const filmeAd of filmes) {
    console.log(filmeAd);
   }   