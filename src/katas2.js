// comece a criar a sua função add na linha abaixo

function add (a,b){
    return a + b;
}

// descomente a linha seguinte para testar sua função
console.assert(add(2, 4) === 6, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo

function multiply(quantidade,multiplicando){
    let resultado = 0 
    for (let index = 1; index <= quantidade; index++){
      resultado = add(resultado,multiplicando)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo

function power(elevado,potencia){
    let resultado = 1 
    for (let index = 1; index <= potencia; index++){
      resultado = multiply(resultado,elevado)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo

function factorial(fatorial){
    let resultado = fatorial 
    for (let index = 1; index < fatorial; index++){
      resultado = multiply(resultado,index)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

// /**
//  * BONUS (aviso: o grau de dificuldade é bem maior !!!)
//  */
// crie a função fibonacci

// function fibonacci(num) {
//     if(num < 1) return 0
//     if(num <= 2) return 1
//     return add(fibonacci(num - 1), fibonacci(num - 2))
// }

function fibonacci(num) {
  let somando = 0;
  let primeiro = 0;
  let segundo = 1;
  for(let index = 0; index < num; index++){
    somando = add(primeiro, segundo);
    primeiro = segundo;
    segundo = somando;
  }
  return primeiro;
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');