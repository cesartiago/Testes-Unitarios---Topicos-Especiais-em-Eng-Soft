//Link do problema: https://leetcode.com/problems/palindrome-number/

const sortColors = require('./sortColors');
const validateInput  = require('./inputValidation');

// Importe o módulo fs para leitura de arquivos
const fs = require('fs');
const testCases = JSON.parse(fs.readFileSync('outputResults.json'));

// Criando uma função simulada para validarEntrada
jest.mock('./inputValidation', () => {
    return jest.fn(); //mock de validarEntrada
});



describe('Função sortColors', () => {
    // Casos de teste:
    // Teste para sortColors com entrada válida
    test('deve retornar o array ordenado para uma entrada válida', () => {
        // Definindo o comportamento da função simulada validateInput
        validateInput.mockReturnValue(true);
        // Testando a função sortColors
        expect(sortColors([2,1,0])).toEqual([0, 1, 2]);
        // Verificando se a função validateInput foi chamada com o argumento correto
        expect(validateInput).toHaveBeenCalled(); 

    });

    // Outros casos de teste podem ser adicionados aqui
    test('deve retornar o array ordenado para entrada válida com elementos repetidos', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 2])).toEqual([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]);
        expect(validateInput).toHaveBeenCalled();
      });

      test('deve lançar erro para string', () => {
        validateInput.mockReturnValue("Você deve passar uma matriz");
        expect(sortColors('Oi, mundo!')).toBe('Você deve passar uma matriz');
        expect(validateInput).toHaveBeenCalled();
      });

          // Casos de teste adicionais:

    // Particionamento de Equivalência:

    test('deve retornar "Array vazio" para um array vazio', () => {
        validateInput.mockReturnValue("Array vazio");
        expect(sortColors([])).toBe("Array vazio");
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar "O array contém elementos fora da faixa de 0 a 2" para um único elemento fora da faixa', () => {
        validateInput.mockReturnValue("O array contém elementos fora da faixa de 0 a 2");
        expect(sortColors([5])).toBe("O array contém elementos fora da faixa de 0 a 2");
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar o array inalterado para elementos todos iguais', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar o array ordenado para uma sequência aleatória', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([1, 0, 2, 1, 0, 2])).toEqual([0, 0, 1, 1, 2, 2]);
        expect(validateInput).toHaveBeenCalled();
    });

    // Análise do Valor Limite:

    test('deve retornar o array ordenado para o menor valor possível', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([0])).toEqual([0]);
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar o array ordenado para o maior valor possível', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([2])).toEqual([2]);
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar o array inalterado para elementos repetidos no limite inferior', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([0, 0, 0])).toEqual([0, 0, 0]);
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar o array inalterado para elementos repetidos no limite superior', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([2, 2, 2])).toEqual([2, 2, 2]);
        expect(validateInput).toHaveBeenCalled();
    });

    // Grafo Causa-Efeito:

    test('deve retornar o array ordenado para uma grande quantidade de elementos em ordem aleatória', () => {
        validateInput.mockReturnValue(true);
        expect(sortColors([2, 0, 1, 2, 0, 2, 0, 1, 2, 1,2,2])).toEqual([0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2]);
        expect(validateInput).toHaveBeenCalled();
    });

    // Error Guessing:

    test('deve retornar "Array nulo" para um array nulo', () => {
        validateInput.mockReturnValue("Array nulo");
        expect(sortColors(null)).toBe("Array nulo");
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar "Você deve passar uma matriz" para uma string vazia', () => {
        validateInput.mockReturnValue("Você deve passar uma matriz");
        expect(sortColors('')).toBe("Você deve passar uma matriz");
        expect(validateInput).toHaveBeenCalled();
    });

    test('deve retornar "O array contém elementos que não são números" para um array contendo elementos não numéricos', () => {
        validateInput.mockReturnValue("O array contém elementos que não são números");
        expect(sortColors(['a', 'b', 'c'])).toBe("O array contém elementos que não são números");
        expect(validateInput).toHaveBeenCalled();
    }); 

    test('deve retornar "Tamanho máximo do array excedido" para um array com mais de 300 elementos', () => {
        validateInput.mockReturnValue("Tamanho máximo do array excedido");
        const inputArray = Array.from({ length: 301 }, (_, index) => index); // Criando um array com mais de 300 elementos
        expect(sortColors(inputArray)).toBe("Tamanho máximo do array excedido");
        expect(validateInput).toHaveBeenCalled();
    });

     // Verificação do limite máximo de tamanho do array:

     test('deve retornar "Tamanho máximo do array excedido" para um array com mais de 300 elementos', () => {
        validateInput.mockReturnValue("Tamanho máximo do array excedido");
        const inputArray = Array.from({ length: 301 }, (_, index) => index); // Criando um array com mais de 300 elementos
        expect(sortColors(inputArray)).toBe("Tamanho máximo do array excedido");
        expect(validateInput).toHaveBeenCalled();
    });

    // Verificação para um array com todos os elementos como o limite inferior:

    test('deve retornar o array ordenado para um array com todos os elementos como o limite inferior (0)', () => {
        validateInput.mockReturnValue(true);
        const inputArray = Array.from({ length: 100 }, () => 0); // Criando um array com 100 elementos, todos iguais a 0
        expect(sortColors(inputArray)).toEqual(inputArray);
        expect(validateInput).toHaveBeenCalled();
    });

    // Verificação para um array com todos os elementos como o limite superior:

    test('deve retornar o array ordenado para um array com todos os elementos como o limite superior (2)', () => {
        validateInput.mockReturnValue(true);
        const inputArray = Array.from({ length: 100 }, () => 2); // Criando um array com 100 elementos, todos iguais a 2
        expect(sortColors(inputArray)).toEqual(inputArray);
        expect(validateInput).toHaveBeenCalled();
    });

    // Verificação para um inteiro passado:

    test('deve retornar o array ordenado para o maior valor possível', () => {
        validateInput.mockReturnValue("Você deve passar uma matriz");
        expect(sortColors(1)).toEqual("Você deve passar uma matriz");
        expect(validateInput).toHaveBeenCalled();
    });

    describe('Função `sortColors` parte 2 (JSON)', () => {
        testCases.testCases.forEach((testCase) => {
          it(`Deve retornar ${testCase.output} Para entrada ${testCase.input}`, () => {
            validateInput.mockReturnValue(testCase.validationMessage);
            const result = sortColors(testCase.input);
            expect(result).toStrictEqual(testCase.output);
            console.log(`Para entrada ${testCase.input}, a mensagem de validação é: ${testCase.validationMessage}`);
          });
        });
      });
      
});
