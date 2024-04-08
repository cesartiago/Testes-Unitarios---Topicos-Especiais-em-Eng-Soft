const isPalindrome = require('./palindrome').isPalindrome; // Importar o arquivo onde a função isPalindrome está definida
const reverseNumber = require('./palindrome').reverseNumber;

describe('isPalindrome function', () => {
  // Casos de teste para cenários positivos usando várias classes de equivalência
  test('deve retornar verdadeiro para 121 (número invertido de um dígito)', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('deve retornar verdadeiro para 1221 (número invertido de vários dígitos)', () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  test('deve retornar verdadeiro para números de um único dígito', () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
  });

  // Casos de teste para cenários negativos usando limites de valor e adivinhação de erros (error guessing)
  test('deve retornar falso para números negativos', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('deve retornar falso para números que terminam em 0 (exceto o próprio 0)', () => {
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(120)).toBe(false);
  });

  // Casos de teste com números gerados aleatoriamente (casos extremos podem ser abordados aqui)
  test('deve lidar com números aleatórios positivos e negativos', () => {
    for (let i = 0; i < 100; i++) {
      const randomNum = Math.floor(Math.random() * 10000); // Generate random numbers within a range
      expect(isPalindrome(randomNum)).toBe(randomNum.toString() === randomNum.toString().split('').reverse().join(''));
    }
  });

  // Teste para linha 4-5
  it('deve retornar uma mensagem de erro para string vazia', () => {
    expect(isPalindrome('')).toBe('Entrada inválida: string vazia não é permitida.');
  });

  // Teste para linha 9-10
  it('deve retornar uma mensagem de erro para entrada não numérica', () => {
    expect(isPalindrome('abc')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
  });

  // Teste para linha 22-23
  it('deve retornar falso para número negativo', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it('deve retornar falso para número positivo terminado em zero (exceto o próprio zero)', () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it('deve retornar uma mensagem de erro para números flutuantes', () => {
    expect(isPalindrome(10.1)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
  });

  // Testes adicionais
  it('deve retornar true para número palíndromo positivo', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it('deve retornar falso para número palíndromo negativo', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it('deve funcionar para números grandes', () => {
    expect(isPalindrome(1234554321)).toBeTruthy(); //limite superior: (2147483648 - 1) e inferior -2147483648 (-231 <= x <= 231 - 1)
    //expect(isPalindrome(234567898765432)).toBeTruthy();
  });

  it('deve retornar uma mensagem de erro para entrada com caracteres inválidos', () => {
    expect(isPalindrome('abc123')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
  });


// Teste Automatizado para 1000 números positivos não palíndromos
for (let i = 0; i < 1000; i++) {
  // Gera um número aleatório positivo
  const randomNumber = Math.floor(Math.random() * (2 ** 31 - 1)) + 1;

  // Gera um número não palíndromo a partir do número aleatório
  let nonPalindromeNumber = randomNumber;

  // Garante que o número gerado não seja um palíndromo
  while (isPalindrome(nonPalindromeNumber)) {
    nonPalindromeNumber = Math.floor(Math.random() * (2 ** 31 - 1)) + 1;
  }

  it(`deve retornar falso para número positivo não palíndromo ${nonPalindromeNumber}`, () => { //ou: `deve retornar falso para número positivo não palíndromo ${i + 1}`,
        // Teste individual para cada número não palíndromo
    expect(isPalindrome(nonPalindromeNumber)).toBeFalsy();
  });
}
});

describe('reverseNumber function', () => {

  // Teste para número palíndromo de um dígito
  it('deve retornar 1 para 1', () => {
    expect(reverseNumber('1')).toBe('1');
  });

  // Teste para número palíndromo de vários dígitos
  it('deve retornar 1234321 para 1234321', () => {
    expect(reverseNumber('1234321')).toBe('1234321');
  });

  // Teste para número não palíndromo
  it('deve retornar 321 para 123', () => {
    expect(reverseNumber('123')).toBe('321');
  });

  /* ESSES TERIAM QUE TER? MAS EU JÁ VERIFICO ANTES...
  // Teste para número negativo
  it('deve retornar 321 para -123', () => {
    expect(reverseNumber(-123)).toThrow();
  });

  // Teste para string (deve lançar um erro)
  it('deve lançar um erro para "abc"', () => {
    expect(() => reverseNumber('abc')).toThrow();
  });

  // Teste para entrada vazia (deve lançar um erro)
  it('deve lançar um erro para ""', () => {
    expect(() => reverseNumber('')).toThrow();
  });

  // Teste para valor NaN (deve lançar um erro)
  it('deve lançar um erro para NaN', () => {
    expect(() => reverseNumber(NaN)).toThrow();
  });
  */
});
