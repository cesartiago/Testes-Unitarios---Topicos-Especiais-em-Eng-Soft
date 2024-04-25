const strSubStr = require('./strSubStr'); // Importa a função que você quer testar
const testCases = require('./testCasesForSubstr.json'); // Importa os casos de teste do arquivo JSON

// Testes
describe('str na subStr function', () => {
    testCases.forEach(({ haystack, needle, expected }, index) => {
        it(`Teste ${index + 1}: Encontrando "${needle}" em "${haystack}"`, () => {
            expect(strSubStr(haystack, needle)).toEqual(expected);
        });
    });
});