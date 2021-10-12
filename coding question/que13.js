//How do you count a number of vowels and consonants in a given string?

const vowel_count = string => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length;

console.log(vowel_count('aaaa'));            // 4
console.log(vowel_count('AAAA'));            // 4
console.log(vowel_count('foo BAR baz QUX')); // 5
console.log(vowel_count('Hello, world!'));   // 3