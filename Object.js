//Object Creation
//By using initialize
let obj_ini = {
  key: "properties",
  name: "Akash",
  Age: 1993 - 2022,
  frindes: ["Amit", "Sai", "sandip"],
};
//By Using New key word
let obj_new = new Object();
obj_new.id = 101;
obj_new.name = "akash";
obj_new.age = 1993 - 2022;

//By Using Constructor Function
function obj_con_fun(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = 1993 - 2022;
}

obj_value = obj_con_fun(151, "akash");

//JavaScript Object Methods
//Object.assign() it is use to create copy of object
//Shallo Copy
const target = {
  a: 1,
  b: 2,
  c: 3,
};
const source = {
  d: "a",
  c: "l",
};

const returnTarget = Object.assign(target, source);
console.log(target);
console.log(returnTarget);
returnTarget.a = "p";
console.log(target);
console.log(returnTarget);

//Deep Copy of Object
//Both object are independent
const d_obj = { a: "c", b: "d" };
const Deep_Copy_Obj = JSON.parse(JSON.stringify(d_obj));
console.log(d_obj);
Deep_Copy_Obj.a = "g";
console.log(Deep_Copy_Obj);

//Object.Create Methods
function frurits() {
  this.name = "franco";
}
function fun() {
  frurits.call(this);
}
fun.prototype = Object.create(frurits.prototype);
const app = new fun();
console.log(app);
//Object.defineProperty
Object.defineProperty(d_obj, "property1", {
  value: 42,
  Writable: false,
});
console.log(d_obj);
//Object.defineProperties
Object.defineProperties(d_obj, {
  property: { value: 45, writable: true },
  property2: { value: "sdfsd", writable: true },
});
console.log(d_obj);
//Object Entries
const obj_ent = { a: "akash", b: "deshmukh" };
console.log(Object.entries(obj_ent));
//Iterating Through an object
Object.entries(obj_ent).forEach(([key, value]) => {
  console.log(`${key}:${value}`);
});
