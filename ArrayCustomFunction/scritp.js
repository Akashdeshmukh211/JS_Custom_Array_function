"use stricts";
// console.log("hello world");
const h1tag = document.querySelector("h1"); // Select H1 tag
// console.log(h1tag);
const btn = document.querySelector("button"); // Select button
// console.log(btn);
btn.addEventListener("click", (e) => {
  //   h1tag.classList.remove("h1tag");
  //   h1tag.classList.add("h1tag-color-change");
  h1tag.classList.toggle("h1tag-color-change");
  h1tag.insertAdjacentText("afterbegin", "I Love ");
  h1tag.style.background = "#fff";
});
//Implementing Custom Map Function

const MyMapFun = function (callback) {
  // console.log("My custom Map Function");

  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    newArray[i] = callback([this[i], i]);
    // console.log(ElementUpdate);
  }
  return newArray;
};
Array.prototype.MyMap = MyMapFun;
const arr = [1, 2, 5];
// console.log(
//   arr.MyMap((e) => {
//     ++e;
//   })
// );
//Custom indexOf
Array.prototype.customIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == value) return i;
  }
  return -1;
};

const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(output.customIndexOf(10)); // 1
//Custom LastIndexOf
Array.prototype.customLastIndexOf = function (value) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == value) return i;
  }
  return -1;
};

console.log(output.customLastIndexOf(8));
//Custom Reverse
Array.prototype.customReverse = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    let temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
  return this;
};

console.log(output.customReverse());
//custom foreach
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
output.customForEach((e, i, arr) => {
  console.log(e * 2);
  // console.log(e);
  // console.log(i);
  // console.log(arr);
});
//Custom map
Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
myMaparr = output.customMap((e, i, arr) => {
  return e * 5;
});
console.log(myMaparr);
//Custom Filter
Array.prototype.customFilter = function (callback) {
  const result = [];
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

Myfilter = myMaparr.customFilter((e) => {
  return e < 20;
});
console.log(Myfilter);
//Custom reduce
Array.prototype.customReducs = function (callback, initialValue) {
  let value = initialValue;

  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i]);
  }
  return value;
};
const sum = output.customReducs((acc = 0, e) => {
  return acc + e;
});
console.log(sum);
//Custom Array Sort
Array.prototype.customSort = function () {
  for (let i = 0; i < this.length; i++) {
    var indexOfmin = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[indexOfmin]) {
        indexOfmin = j;
      }
    }
    if (indexOfmin !== i) {
      let lesser = this[indexOfmin];
      this[indexOfmin] = this[i];
      this[i] = lesser;
    }
  }
  return this;
};
console.log(output.customSort());
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var indexOfmin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfmin]) {
        indexOfmin = j;
      }
    }
    if (indexOfmin !== i) {
      let lesser = arr[indexOfmin];
      arr[indexOfmin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
console.log(selectionSort(output));
