//How do you count the occurrence of a given character in a string?

console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3

console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4
