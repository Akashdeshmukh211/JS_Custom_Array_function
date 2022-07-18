//JavaScript String
//The string is an object that reperents a sequence of characters
//2 way to create string in js
//by string literal
let string_name = "Hello world";
//By using String Object
let strainName = new String("Hello World");

//String Methods
//CharAt() this method returen the character at the given index
console.log(strainName.charAt(4));

//Concat(str) this method concatenates or join two string.
let New_string = strainName.concat(string_name);
console.log(New_string);

//indexOf() this method returns the index position of the given string
console.log(strainName.indexOf("w"));

//LastIndexOf() this returns the last index position of the given string
console.log(strainName.lastIndexOf("w"));

//toLowercase() it returns the given string in lowercase
console.log(string_name.toLowerCase());

//toUpperCase() it returns the given string in uppercase
console.log(string_name.toUpperCase());

//slice(statr,end) this method returen the parts of string from start to end
console.log(strainName.slice(4, 10));

//Split() this method convert string into array
console.log(string_name.split(""));
