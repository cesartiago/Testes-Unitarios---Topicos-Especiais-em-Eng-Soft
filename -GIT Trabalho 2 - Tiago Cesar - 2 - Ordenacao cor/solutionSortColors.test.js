const sortColors = require('./solutionSortColors').sortColors;  // Importa a função sortColors
const swap = require('./solutionSortColors').swap;  // Importa a função swap

describe('sortColors', () => {
  

  //0. Testes básicos:
  it('Caso 0.1: Deve ordenar corretamente um array de cores', () => {
    // Array de cores desordenado
    const colors = [2, 0, 1, 2, 1, 0];
    
    // Chamada da função para ordenar as cores
    sortColors(colors);

    // Array de cores esperado após a ordenação
    const expected = [0, 0, 1, 1, 2, 2];

    // Verifica se o array de cores foi ordenado corretamente
    expect(colors).toEqual(expected);
  });

  it('Caso 0.2: Deve retornar o mesmo array se já estiver ordenado', () => {
    // Array de cores já ordenado
    const colors = [0, 0, 1, 1, 2, 2];
    
    // Chamada da função para ordenar as cores
    sortColors(colors);

    // Array esperado deve ser o mesmo que o array original
    const expected = [0, 0, 1, 1, 2, 2];

    // Verifica se o array permanece inalterado
    expect(colors).toEqual(expected);
  });

  //1. Particionamento de Equivalência (7 Casos)
  test('1.1. Array com apenas vermelhos (0)', () => {
    const nums = [0, 0, 0, 0, 0];
    const expected = [0, 0, 0, 0, 0];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('1.2. Array com apenas brancos (1)', () => {
    const nums = [1, 1, 1, 1, 1];
    const expected = [1, 1, 1, 1, 1];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('1.3. Array com apenas azuis (2)', () => {
    const nums = [2, 2, 2, 2, 2];
    const expected = [2, 2, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('1.4. Array com mistura uniforme de vermelhos, brancos e azuis (1/3 de cada)', () => {
    const nums = [0, 1, 2, 0, 1, 2, 0, 1, 2];
    const expected = [0, 0, 0, 1, 1, 1, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });
  

  test('1.5. Array com maioria de vermelhos (60%), 20% de brancos e 20% de azuis', () => {
    const nums = [0, 0, 0, 0, 0, 0, 1, 1, 2, 2];
    const expected = [0, 0, 0, 0, 0, 0, 1, 1, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  
  test('1.6. Array com maioria de brancos (60%), 20% de vermelhos e 20% de azuis', () => {
    const nums = [1, 1, 1, 1, 1, 1, 0, 0, 2, 2];
    const expected = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });
  

  test('1.7. Array com maioria de azuis (60%), 20% de vermelhos e 20% de brancos', () => {
    const nums = [2, 2, 2, 2, 2, 2, 0, 0, 1, 1];
    const expected = [0, 0, 1, 1, 2, 2, 2, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  //2. Análise do Valor Limite (8 Casos)
  test('2.1: Array com um único elemento (vermelho)', () => {
    const nums = [0];
    const expected = [0];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });
  
  test('2.2: Array com um único elemento (branco)', () => {
    const nums = [1];
    const expected = [1];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  
  test('2.3: Array com um único elemento (azul)', () => {
    const nums = [2];
    const expected = [2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('2.4: Array com dois elementos (vermelho e branco)', () => {
    const nums = [0, 1];
    const expected = [0, 1];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('2.5: Array com dois elementos (azul e vermelho)', () => {
    const nums = [2, 0];
    const expected = [0, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('2.6: Array com dois elementos (branco e azul)', () => {
    const nums = [1, 2];
    const expected = [1, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('2.7: Array com tamanho próximo ao limite máximo (299)', () => {
    const nums = Array(299).fill(0);
    const expected = Array(299).fill(0);
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('2.8: Array com tamanho máximo (300)', () => {
  const nums = Array(300).fill(0);
  const expected = Array(300).fill(0);
  const result = sortColors(nums);
  expect(result).toEqual(expected);
});


//3. Grafo Causa-Efeito (4 Casos)
  test('3.1: Array com um bloco de brancos seguido de um bloco de azuis e um bloco de vermelhos. Transição gradual entre cores (B-A-V-B-A-V)', () => {
    const nums = [1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0];
    const expected = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('3.2: Array com um bloco de azuis seguido de um bloco de brancos e um bloco de vermelhos. Blocos de cores agrupados (AAA-BBB-VVV)', () => {
    const nums = [2, 2, 2, 1, 1, 1, 0, 0, 0];
    const expected = [0, 0, 0, 1, 1, 1, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });

  test('3.3: Blocos de cores intercalados (B-V-B-V-B-B-V)', () => {
    const nums = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    const expected = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });
  
  test('3.4: Mudanças bruscas de cor (A-A-A-V-V-V)', () => {
    const nums = [2, 2, 2, 0, 0, 0];
    const expected = [0, 0, 0, 2, 2, 2];
    const result = sortColors(nums);
    expect(result).toEqual(expected);
  });
  
  //4. Error Guessing (4 Casos)

  test('4.1: Array com elementos fora da faixa (negativos ou maiores que 2)', () => {
    const nums = [-1, 3, 0, 1, 2];
    expect(() => sortColors(nums)).toThrow(/Elemento fora da faixa/);
  });

  test('4.2: Array vazio', () => {
    const nums = [];
    expect(() => sortColors(nums)).toThrow(/Array vazio/);
  });

  
  test('4.3: Array nulo', () => {
    expect(() => sortColors(null)).toThrow(/Array nulo/);
  });

  
  test('4.4: Array não é um objeto', () => {
    const nums = 123;
    expect(() => sortColors(nums)).toThrow(/Array não é um objeto/);
  });
  
});

describe('swap', () => {
  it('deve trocar corretamente dois elementos em um array', () => {
    // Array de exemplo
    const array = [1, 2, 3, 4, 5];

    // Chamada da função swap para trocar o primeiro e o último elementos
    swap(array, 0, array.length - 1);

    // Array esperado após a troca
    const expected = [5, 2, 3, 4, 1];

    // Verifica se a troca foi realizada corretamente
    expect(array).toEqual(expected);
  });

  describe('Função swap', () => {
    it('deve trocar elementos em um array', () => {
      const arr = [1, 2, 3];
      swap(arr, 0, 2);
      expect(arr).toEqual([3, 2, 1]);
    });
  
    it('deve funcionar com arrays de qualquer tamanho', () => {
      const arr = [1, 2];
      swap(arr, 0, 1);
      expect(arr).toEqual([2, 1]);
  
      const longArr = [1, 2, 3, 4, 5];
      swap(longArr, 1, 3);
      expect(longArr).toEqual([1, 4, 3, 2, 5]);
    });
  
    it('deve funcionar com qualquer índice válido', () => {
      const arr = [1, 2, 3];
      swap(arr, 0, 0);
      expect(arr).toEqual([1, 2, 3]);
  
      swap(arr, 2, 2);
      expect(arr).toEqual([1, 2, 3]);
  
      swap(arr, 1, 2);
      expect(arr).toEqual([1, 3, 2]);
    });
  
    it('deve lançar um erro se o array for nulo', () => {
      expect(() => swap(null, 0, 1)).toThrow('Array nulo');
    });
  
    it('deve lançar um erro se o array não for um objeto', () => {
      expect(() => swap(123, 0, 1)).toThrow('Array não é um objeto');
    });
  
    it('deve lançar um erro se o array estiver vazio', () => {
      expect(() => swap([], 0, 0)).toThrow('Array vazio');
    });
  
    it('deve lançar um erro se os índices estiverem fora dos limites', () => {
      const arr = [1, 2, 3];
      expect(() => swap(arr, -1, 0)).toThrow('Índice fora da faixa');
      expect(() => swap(arr, 0, -1)).toThrow('Índice fora da faixa');
      expect(() => swap(arr, 3, 0)).toThrow('Índice fora da faixa');
      expect(() => swap(arr, 0, 3)).toThrow('Índice fora da faixa');
      
    });
  });

  describe('sortColors - Testes Automatizados', () => {
    for (let i = 0; i < 1000; i++) {
      test(`Teste Automatizado ${i + 1}`, () => {
        // Gera uma matriz aleatória de tamanho aleatório entre 1 e 300
        const randomSize = Math.floor(Math.random() * 300) + 1;
        const randomInput = Array.from({ length: randomSize }, () => Math.floor(Math.random() * 3)); // Gera um número aleatório entre 0 e 2 para representar as cores
        
        // Faz uma cópia ordenada da matriz aleatória
        const sortedInput = [...randomInput].sort((a, b) => a - b);
        
        // Ordena a matriz aleatória usando a função sortColors
        const result = sortColors(randomInput);
        
        // Verifica se a matriz ordenada é igual à matriz ordenada esperada
        expect(result).toEqual(sortedInput);
      });
    }
  });

});
