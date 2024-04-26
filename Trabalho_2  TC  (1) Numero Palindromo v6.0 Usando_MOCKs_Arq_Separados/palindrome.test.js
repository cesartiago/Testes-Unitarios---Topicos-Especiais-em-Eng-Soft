//Link do problema: https://leetcode.com/problems/palindrome-number/

const isPalindrome = require('./isPalindrome');
const validarEntrada = require('./validarEntrada');

// Importe o módulo fs para leitura de arquivos
const fs = require('fs');
const testCases = JSON.parse(fs.readFileSync('outputResults.json'));

// Criando uma função simulada para validarEntrada
jest.mock('./validarEntrada', () => {
  return jest.fn(); //mock de validarEntrada
});

describe('Função isPalindrome', () => {
// Casos de teste:
// Teste para isPalindrome com entrada válida
test('deve retornar verdadeiro para um número de palíndromo válido', () => {
  // Definindo o comportamento da função simulada validarEntrada
  validarEntrada.mockReturnValue(true);
  // Testando a função isPalindrome
  expect(isPalindrome(121)).toBe(true);
  // Verificando se a função validarEntrada foi chamada com o argumento correto
  expect(validarEntrada).toHaveBeenCalledWith(121);
});

// Teste para isPalindrome com entrada inválida
test('deve retornar falso para uma entrada inválida', () => {
  // Definindo o comportamento da função simulada validarEntrada
  validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
  // Testando a função isPalindrome com entrada inválida
  expect(isPalindrome(12.1)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
  // Verificando se a função validarEntrada foi chamada com o argumento correto
  expect(validarEntrada).toHaveBeenCalledWith(12.1);
});

/* Para fins de estudo, mudei para "it" - que é sinônimo de test, alguns a partir daqui:*/

  it('deve retornar true para número palíndromo com espaços', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome('1 2 2 1')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith('1 2 2 1');
  });

  it('deve retornar true para número palíndromo binário', () => {
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome('10101')).toBeTruthy();
    expect(validarEntrada).toHaveBeenCalledWith('10101');
  });

  // Teste para número flutuante
  test('deve retornar uma mensagem de erro para número flutuante', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome(12.34)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith(12.34);
  });

  // Teste para número flutuante
  test('deve retornar uma mensagem de erro para número flutuante', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome(1.1)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith(1.1);
  });

  test('deve retornar verdadeiro para 1221 (número invertido de vários dígitos)', () => {
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome(1221)).toBe(true);
    expect(validarEntrada).toHaveBeenCalledWith(1221);
  });

  test('deve retornar verdadeiro para números de um único dígito', () => {
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(1)).toBe(true);
    expect(isPalindrome(9)).toBe(true);
    expect(validarEntrada).toHaveBeenCalledWith(0);
    expect(validarEntrada).toHaveBeenCalledWith(1);
    expect(validarEntrada).toHaveBeenCalledWith(9);
  });


  test('deve retornar falso para números que terminam em 0 (exceto o próprio 0)', () => {
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(120)).toBe(false);
    expect(validarEntrada).toHaveBeenCalledWith(10);
    expect(validarEntrada).toHaveBeenCalledWith(120);
  });

  // Teste para linha 4-5
  it('deve retornar uma mensagem de erro para string vazia', () => {
    validarEntrada.mockReturnValue('Entrada inválida: string vazia não é permitida.');
    expect(isPalindrome('')).toBe('Entrada inválida: string vazia não é permitida.');
    expect(validarEntrada).toHaveBeenCalledWith('');
  });

  // Teste para linha 9-10
  it('deve retornar uma mensagem de erro para entrada não numérica', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome('abc')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith('abc');
  });

  // Teste para linha 22-23
    // Casos de teste para cenários negativos usando limites de valor e adivinhação de erros (error guessing)
    test('deve retornar falso para números negativos', () => {
      validarEntrada.mockReturnValue(true);
      expect(isPalindrome(-121)).toBe(false);
      expect(validarEntrada).toHaveBeenCalledWith(-121);
    });

  it('deve retornar falso para número positivo terminado em zero (exceto o próprio zero)', () => {
    validarEntrada.mockReturnValue(false);
    expect(isPalindrome(90)).toBe(false);
    expect(validarEntrada).toHaveBeenCalledWith(90);
  });

  it('deve retornar uma mensagem de erro para números flutuantes', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome(10.1)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith(10.1);
  });

  // Testes adicionais
  it('deve retornar true para número palíndromo positivo sem sinal', () => {
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome(3165995613)).toBe(true);
    expect(validarEntrada).toHaveBeenCalledWith(3165995613);
  });
  it('deve funcionar para números grandes', () => {
    expect(isPalindrome(1234554321)).toBeTruthy(); //limite superior: (2147483648 - 1) e inferior -2147483648 (-231 <= x <= 231 - 1)
    //expect(isPalindrome(234567898765432)).toBeTruthy();
  });

  it('deve retornar uma mensagem de erro para entrada com caracteres inválidos', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome('abc123')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith('abc123');
  });

  // Teste para NaN
  test('deve retornar uma mensagem de erro para NaN', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome(NaN)).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith(NaN);
  });

  // Teste para números com dois pontos
  it('deve retornar uma mensagem de erro para palíndromos com pontos (separadores de milhares)', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome('12.332.1')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    expect(validarEntrada).toHaveBeenCalledWith('12.332.1');
  });

  it('deve retornar uma mensagem de erro para para números palíndromos com letras maiúsculas e minúsculas', () => {
    validarEntrada.mockReturnValue('Entrada inválida: apenas números inteiros são aceitos.');
    expect(isPalindrome('A1221a')).toBe('Entrada inválida: apenas números inteiros são aceitos.');
    
    validarEntrada.mockReturnValue(true);
    expect(isPalindrome('0000')).toBe(true);
    
    expect(validarEntrada).toHaveBeenCalledWith('A1221a');
    expect(validarEntrada).toHaveBeenCalledWith('0000');
  });

  describe('Função `isPalindrome` parte 2 (JSON)', () => {
    testCases.testCases.forEach((testCase) => {
      it(`Deve retornar ${testCase.output} Para entrada ${testCase.input}`, () => {
        validarEntrada.mockReturnValue(testCase.validationMessage);
        const result = isPalindrome(testCase.input);
        expect(result).toBe(testCase.output);
        console.log(`Para entrada ${testCase.input}, a mensagem de validação é: ${testCase.validationMessage}`);
      });
    });
  });
  
  

});




/*
1. Particionamento de Equivalência:
  Entrada válida:
    deve retornar verdadeiro para um número de palíndromo válido (121)
    deve retornar true para número palíndromo com espaços ('1 2 2 1')
    deve retornar true para número palíndromo binário ('10101')
    deve retornar verdadeiro para 1221 (número invertido de vários dígitos)
    deve retornar verdadeiro para números de um único dígito (0, 1, 9)
    deve retornar true para número palíndromo positivo sem sinal (3165995613)
    deve funcionar para números grandes (1234554321)
  Entrada inválida:
    deve retornar falso para uma entrada inválida (12.1)
    deve retornar uma mensagem de erro para número flutuante (12.34, 1.1)
    deve retornar uma mensagem de erro para string vazia (linha 4-5)
    deve retornar uma mensagem de erro para entrada não numérica ('abc')
    deve retornar uma mensagem de erro para caracteres inválidos ('abc123')
    deve retornar uma mensagem de erro para NaN
  Validação de entrada:
    deve verificar se a função validarEntrada foi chamada com o argumento correto em cada caso de teste.

2. Análise do Valor Limite:
  Limites superior e inferior:
    deve funcionar para números grandes (1234554321) (limite superior: (2147483648 - 1))
    deve retornar falso para números negativos (-121) (limite inferior: -2147483648)

  Casos de borda:
    deve retornar falso para números que terminam em 0 (exceto o próprio 0) (10, 120)
    deve retornar zero para o próprio 0 (0)


3. Gráfico Causa-Efeito:
  Entrada:
    Válida:
      Número inteiro
      Positivo (exceto 0)
      Sem espaços
      Sem caracteres especiais
      Pode ser binário
      Quantidade de dígitos ilimitada (até o limite da linguagem)
    Inválida:
      Número flutuante
      String vazia
      Contém caracteres especiais
      Negativo (exceto -0)
      Termina em 0 (exceto 0)
      NaN
    Saída:
      Verdadeiro: Número palíndromo válido
      Falso: Número não palíndromo ou entrada inválida
      Mensagem de erro: Entrada inválida (descrevendo o tipo de erro)

4. Error Guessing:
  Entradas que podem gerar erros:
    Números flutuantes
    Strings vazias
    Caracteres especiais
    Números negativos (exceto -0)
    Números que terminam em 0 (exceto 0)
    NaN
  Mensagens de erro esperadas:
    "Entrada inválida: apenas números inteiros são aceitos."
    "Entrada inválida: string vazia não é permitida."
    "Entrada inválida: apenas números inteiros são aceitos." (para caracteres especiais)
    "Entrada inválida: apenas números inteiros são aceitos." (para números negativos)
    "Entrada inválida: apenas números inteiros são aceitos." (para números que terminam em 0)
    "Entrada inválida: apenas números inteiros são aceitos." (para NaN)
*/