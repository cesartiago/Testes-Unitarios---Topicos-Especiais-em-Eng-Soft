const fs = require('fs');
const path = require('path');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTestCaseForSubstr() {
    const haystackLength = getRandomInt(5, 20);
    const needleLength = getRandomInt(0, Math.floor(haystackLength / 2)); // Permitindo também substrings vazias
    const haystack = generateRandomString(haystackLength);
    let needleIndex;
    
    let needle;
    if (Math.random() < 0.4) {
        needleIndex = getRandomInt(haystackLength, 2 * haystackLength); // Garante que a substring não exista na haystack
        needle = generateRandomString(needleLength);
    } else {
        needleIndex = getRandomInt(0, haystackLength - needleLength);
        needle = haystack.substring(needleIndex, needleIndex + needleLength);
    }
    
    if (needle === '') {
        return {
            haystack,
            needle,
            expected: 0,
        };
    }
    return {
        haystack,
        needle,
        expected: haystack.includes(needle) ? needleIndex : -1, // Retorna -1 se a substring não existe na haystack
    };
}

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const testCasesForSubstr = Array.from({ length: 1000 }, generateTestCaseForSubstr);


fs.writeFileSync(path.resolve('testCasesForSubstr.json'), JSON.stringify(testCasesForSubstr, null, 2));
