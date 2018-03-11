function compute(conta,total_pago){
  hash = {}
  values = [
    {"20": 2000},
    {"10": 1000},
    {"5": 500},
    {"2": 200},
    {"1": 100},
    {"0.25": 25},
    {"0.10": 10},
    {"0.5": 5},
    {"0.1": 1}
  ]

  values.forEach(elm => {
    nome = Object.keys(elm)[0]
    valor = Object.keys(elm)[0]

    qnt = Math.floor(total_pago/valor)
    if(qnt > 0){
      hash[nome] = qnt
      total_pago = total_pago%valor
    }
  });

  return hash
}

console.log(compute(1000,2000));