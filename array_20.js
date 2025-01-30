//usando o find() para encontrar a primeira pessoa com idade maior que 18.

const dados=[
    {nome:"Jesiel Viana",idade:30},
    {nome:"Antonio Matheus",idade:18},
    {nome:"João guilherme",idade:17},
    {nome:"Juan do Monte",idade:19}
   
]
const MaiordeIdade=dados.find((dados) => dados.idade>18)
 console.log(MaiordeIdade)
