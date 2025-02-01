   //Imprimindo o primeiro nme do usuario

function primeironome(nomecompleto){
const nome=nomecompleto.split(' ')
    const primeironome=nome[0]
    console.log(`Seu primeiro nome é: ${primeironome}`)
}

const usuario=prompt('digite o seu nome completo: ')
primeironome(usuario)