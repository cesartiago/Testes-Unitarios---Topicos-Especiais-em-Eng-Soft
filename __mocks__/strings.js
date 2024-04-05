function generateTestCases (){
    const testCases = [];

    // particionamento de equivalência
    testCases.push({ haystack: "", needle: "", expected: 0 }); // (String vazia)
    testCases.push({ haystack: "abc", needle: "", expected: 0 }); //(String vazia para needle)
    testCases.push({ haystack: "", needle: "abc", expected: 0 }); //(String vazia para haystack)
    testCases.push({ haystack: "sadbutsad", needle: "taf", expected: 0 }); //(Substring não presente)
    testCases.push({ haystack: "sadbutsad", needle: "sad", expected: 0 });

    testCases.push({ haystack: "sadbutsad", needle: "sad", expected: 0 });
    testCases.push({ haystack: "leetcode", needle: "leeto", expected: -1 });
    testCases.push({ haystack: "hello", needle: "ll", expected: 2 });
    testCases.push({ haystack: "aaaaa", needle: "bba", expected: -1 });
    testCases.push({ haystack: "sadbutsad", needle: "sad", expected: 0 });
    testCases.push({ haystack: "leetcode", needle: "leeto", expected: -1 });
    testCases.push({ haystack: "hello", needle: "ll", expected: 2 });
    testCases.push({ haystack: "aaaaa", needle: "bba", expected: -1 });
    testCases.push({ haystack: "a", needle: "", expected: 0 });
    testCases.push({ haystack: "mississippi", needle: "issip", expected: 4 });
    testCases.push({ haystack: "abcdefg", needle: "de", expected: 3 });
    testCases.push({ haystack: "aabbcc", needle: "bb", expected: 2 });
    testCases.push({ haystack: "racecar", needle: "car", expected: 4 });
    testCases.push({ haystack: "banana", needle: "na", expected: 2 });
    testCases.push({ haystack: "testing", needle: "test", expected: 0 });

    return testCases;
}

module.exports = generateTestCases;