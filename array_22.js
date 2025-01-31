//Criando uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

function primeiroeUltimonome(nomecompleto){
    const nome=nomecompleto.split(" ");

    const primeiroNome=nome[0];
    const ultimoNome=nome[nome.length -1]

    console.log(`Seu primeiro nome: ${primeiroNome}`)
    console.log(`Seu último nome: ${ultimoNome}`)

}

const nomeUser=prompt('digite o seu nome completo: ')

primeiroeUltimonome(nomeUser);