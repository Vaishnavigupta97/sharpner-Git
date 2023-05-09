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
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i <items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//......................................... querySelector...............................
// var header = document.querySelector("#main-header");
// header.style.borderBottom = 'solid 4px #ccc';
// console.log(document.getElementsByTagName('div'));

var input = document.querySelector('input');
input.value = "Hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = "red";   

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
thirdItem.style.display = "none";

// .......................................querySelectorAll............................
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < even.length; i++){
    odd[i].style.backgroundColor = "green";
    even[i].style.backgroundColor = "#ccc";
}