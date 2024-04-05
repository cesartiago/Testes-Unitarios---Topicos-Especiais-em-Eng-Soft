const  strSubStr  = require('./strSubStr'); // Importa a função que você quer testar
const  generateTestCases  = require('./__mocks__/strings'); // Importa a função que gera os casos de teste

// Gerar casos de teste
const testCases = generateTestCases();

// Testes
describe('str na subStr function', () => {
    testCases.forEach(({ haystack, needle, expected }, index) => {
        it(`Teste ${index + 1}: Encontrando "${needle}" em "${haystack}"`, () => {
            expect(strSubStr(haystack, needle)).toEqual(expected);
        });
    });
});