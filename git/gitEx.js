// console.log("this is git");
// ..................................example the document object................................
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// document.all[8].textContent = "Hello";

// ////////////////////////////////////////////getElementById/////////////////////////////////////////////
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello text content"
// headerTitle.innerText = "Hello text content";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = `<h3>heading</h3>`
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 3px #000";

// ..........................................getElementByClassName...........................
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2";
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(var i = 0; i <items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

