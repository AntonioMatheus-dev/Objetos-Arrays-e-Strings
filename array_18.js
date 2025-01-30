   //usando filter para filtrar os carros de 2010 em diante 

const carros=[
    { nome: "Toyota Corolla", ano: 2008 },
    { nome: "Honda Civic", ano: 2012 },
    { nome: "Ford Focus", ano: 2015 },
    { nome: "Chevrolet Onix", ano: 2020 },
    { nome: "Volkswagen Gol", ano: 2009 },
    { nome: "Hyundai HB20", ano: 2018 }
]

 const carrosnovos=carros.filter((carros => carros.ano >=2010))
  console.log('Carros do ano 2010 e diante: ')
  console.log(carrosnovos)
