//The Array in JS
//The array object, as with array is other programing languages
//It Enables storing a collection of multipl itms under a single variable name & has members for
// performing common array opertaions.
//i resizable & can contain a mix of dirr data type
// array are zero indexed.
//Following way to create array in js

//By using literal
let arr_literal = [1, 2, 3, 7, 8, 5];
console.log(arr_literal);
//By using New key word
let arr_nem = new Array();
arr_nem[0] = 1;
arr_nem[1] = 2;
arr_nem[2] = 3;
arr_nem[3] = 4;

console.log(arr_nem);
//By using Constructor
const arr_con = new Array(1, 2, 40);
console.log(arr_con);

//Array Methods
//Concatc() it merged two or more array and returns new array

let concatarr = arr_literal.concat(arr_nem);
console.log(concatarr);

//copyWithinn() it copies the part of the give array with its own elements and returns modified array
console.log(arr_literal.copyWithin(0, 5));

//entries() it create an iteraltor object and a loop that iterators over each key/value pair
let itr = arr_literal.entries();
for (let e of itr) console.log(e);

//every() it determines whether all the elements of an array satisfing the provided function condition
let result = arr_literal.every((e) => e < 0);
console.log(result);

//flat() it create a new array carraying sub-array element concatenated recursively till the specified depth
let arr_flat = [1, 2, 5, 6, [4, 5, 8, 9]];
console.log(arr_flat.flat());

//fill() it fills elements into an aray eith static value
arr_flat.fill(1, 0, 4);
console.log(arr_flat.flat());

//from() this method creates a new array that holds the shallow copy from an array or iterable object
//When applied to string each word gets converted to an array element in the new array
let res = Array.from("You are viewing an example of string");
console.log(res);

//Filter() The method filter and extract the element of an array that satisfying the provided condition
//it doesn't changes the original array
let res_filter_arr = arr_flat.flat().filter((e) => e > 5);
console.log(res_filter_arr);

//find() it return the value of the first element in the given array that staticfies the specified condition
let res_find_arr = arr_literal.find((e) => e < 4);
console.log(res_find_arr);

//findIndex() it return the index of first element of the given array that satisfies the condition
let res_findIndex_arr = arr_literal.findIndex((e) => e < 4);
console.log(res_findIndex_arr);

//ForEach() This method is used to invoke the specified function once for each array element.
arr_literal.forEach((e) => e);

//Includes() it checks whether the given array contains the specified element
//It return result in true if element is present in array else return fales
console.log(arr_literal.includes(3));
console.log(arr_literal.includes("s"));

//isArray() it tests if the passed value is an array
console.log(Array.isArray(arr_literal));
let test = 4;
console.log(Array.isArray(test));

//Join() it joins the elements of an array as string
//it convert array into string
let join_string = arr_literal.join(",");
console.log(typeof join_string);
console.log(join_string);

//keys() this method creacts and returen a new iterator object which holds the key of every index in the array
let key_itr = arr_literal.keys();
for (let k of key_itr) console.log(k);

//lastIndexOf() it searches the specified element in the given array and return the index of the last match
console.log(arr_literal.lastIndexOf(2));

//Map() this method calls the specified function for every array element and return the new array
let map_arr = arr_literal.map((e) => e * 2);
console.log(map_arr);

//Reverse() this method return reverse array
let arr_reverse = arr_literal.reverse();
console.log(arr_reverse);

//Reduce() this method reduce the given array into a signal value by executing a reducer function
let arr_reduce = arr_literal.reduce((acc, e) => acc + e);
console.log(arr_reduce);

//Slice() it return a new array it extracts the part of the given array and return it
let arr_slice = arr_con.slice(0, 2);
console.log(arr_slice);

//Sort ( ) this method is used to arrange the array element in some order. by default sort() method follows the ascending order
console.log(arr_literal.sort());
let arr_string = ["a", "v", "h", "b", "c"];
console.log(arr_string.sort());
let arr_number = [100, 45, 24, 26, 1, 2, 3];
console.log(arr_number.sort()); //it will convert number into string after that it do sorting
//to solve this issues we used compare function
//this function for accending order
function compareAccending(a, b) {
  return a - b;
}
console.log(arr_number.sort(compareAccending)); //
function compareDeccending(a, b) {
  return b - a;
}
console.log(arr_number.sort(compareDeccending)); //
