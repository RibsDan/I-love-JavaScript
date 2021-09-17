//Escreva uma função que receba um número
//e retorne o seguinte:
//Número divisivel por 3 = 'Fizz'
//Número divisivel por 5 = 'Buzz'
//Número divisivel por 3 e por 5 = 'Fizz Buzz'
//Numero não é divisível por 3 e 5 = retorna o própio número.
//Checar se o número é realmente um número não sendo retorna oque for.
//Usar iteração de 0 a 100

function fizzBuzz(n) {
  if(typeof n !== 'number') return n;
  if(n % 3 === 0 && n % 5 === 0) return 'Fizz Buzz';
  if(n % 3 === 0) return 'Fizz';
  if(n % 5 === 0) return 'Buzz';
  return n;
}
console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
