   //Exibindo todos os filmes informados usando um for tradicional.

let filmes=[];

for(let i=0; i< 5; i++){
    let filmeAd=prompt(`Digite o nome do filme ${i+1}`);
    filmes.push(filmeAd);
}

console.log('Seus filmes são: ');

for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
   }

   