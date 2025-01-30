   //Usando includes para indentificar quais elementos estão na lista

let opções=prompt('Digite o nome da fruta')

const frutas=["Banana","Goiaba","Caju","Uva"]

if(frutas.includes(opções)){
console.log("certo")
}else{
console.log("errado")
}