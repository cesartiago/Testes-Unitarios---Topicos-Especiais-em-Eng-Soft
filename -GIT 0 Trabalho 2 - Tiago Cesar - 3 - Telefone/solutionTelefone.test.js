const letterCombinations = require('./solutionTelefone');

// Definição dos primeiros casos de teste com critérios específicos
describe('letterCombinations', () => {
  it('deve retornar um array vazio para uma string vazia', () => {  
    expect(letterCombinations('')).toEqual([]);
  });

  it('deve retornar todas as combinações para um único dígito', () => { 
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    expect(letterCombinations('3')).toEqual(['d', 'e', 'f']);
  });

  it('deve retornar todas as combinações de dois dígitos', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
    expect(letterCombinations('45')).toEqual([
      'gj',
      'gk',
      'gl',
      'hj',
      'hk',
      'hl',
      'ij',
      'ik',
      'il',
    ]);
  });

  it('deve retornar todas as combinações de três dígitos', () => {
    expect(letterCombinations('234')).toHaveLength(27);
    expect(letterCombinations('789')).toHaveLength(48);
  });

it('deve retornar um erro para um dígito inválido', () => {
  expect(() => letterCombinations('1')).toThrow();
  expect(() => letterCombinations('0')).toThrow();
});

  it('deve retornar todas as combinações para dígitos repetidos', () => {
    expect(letterCombinations('22')).toEqual([
      'aa',
      'ab',
      'ac',
      'ba',
      'bb',
      'bc',
      'ca',
      'cb',
      'cc',
    ]);
    expect(letterCombinations('333')).toHaveLength(27);
  });

  it('deve gerar um erro para caracteres não numéricos', () => {
    expect(() => letterCombinations('abc')).toThrow();
    expect(() => letterCombinations('2a3')).toThrow();
  });

  // **Teste Aleatório COM PROBLEMA**

  it('deve gerar 1000 casos de teste aleatórios', () => {
    function calculateExpectedLength(digits) {
      let length = 1;
      for (const digit of digits) {
        if (digit >= '2' && digit <= '6') {
          length *= 3;
        } else if (digit === '7' || digit === '9') {
          length *= 4;
        }
      }
      return length;
    }
  
    for (let i = 0; i < 1000; i++) {
      const digits = generateRandomDigits(1, 4);
      const expectedLength = digits.length === 0 ? 0 : calculateExpectedLength(digits) * digits.length;
      expect(letterCombinations(digits)).toHaveLength(expectedLength);
    }
  });
  
  
  

  function generateRandomDigits(minLength, maxLength) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const digits = [];
    for (let i = 0; i < length; i++) {
      digits.push(Math.floor(Math.random() * 8) + 2); // Gerar um número aleatório entre 2 e 9
    }
    return digits.join('');
  }
});
