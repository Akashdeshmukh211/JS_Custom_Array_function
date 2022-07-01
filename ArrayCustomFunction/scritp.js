"use stricts";

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
