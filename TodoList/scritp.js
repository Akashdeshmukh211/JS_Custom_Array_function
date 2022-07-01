"use stricts";

let textAdd = document.querySelector(".text_add");
let btnAdd = document.querySelector(".btn_add");
let TodoUl = document.querySelector(".ToDoUl");
function addMore() {
  document.getElementById("error").innerHTML = "";
  let textFiled = document.getElementById("textfiled").value;
  if (textFiled == "") {
    document.getElementById("error").innerHTML = "Please enter value";
  } else {
    let li = document.createElement("li");
    li.textContent = textFiled;
    let pos = TodoUl.firstElementChild;
    let a = document.createElement("a");
    a.textContent = "Delete";
    a.href = "javascript:void(0)";
    a.className = "btn_remove";
    li.appendChild(a);
    // console.log(pos);
    if (pos == null) {
      TodoUl.appendChild(li);
    } else {
      TodoUl.insertBefore(li, pos);
    }
  }
  document.getElementById("textfiled").value = "";
}
let btn = document.querySelector("ul");
btn.addEventListener("click", (e) => {
  let TodoUl = document.querySelector(".ToDoUl");
  // console.log(e.target);
  let li = e.target.parentNode;
  TodoUl.remove(li);
});
