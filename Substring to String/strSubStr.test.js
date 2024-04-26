const strSubStr = require('./__Mocks__/strSubStr')
const testCases = require('./testCasesForSubstr.json');

// Criando uma função simulada o mock
jest.mock('./__Mocks__/strSubStr', () => {
    return jest.fn((haystack, needle) => {
        // Implementação básica para o mock
        return haystack.indexOf(needle);
    });
});

// Testes
describe('str na subStr function', () => {
    testCases.forEach(({ haystack, needle, expected }, index) => {
        it(`Teste ${index + 1}: Encontrando "${needle}" em "${haystack}"`, () => {
            expect(strSubStr(haystack, needle)).toEqual(expected);
        });
    });
});