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
// console.log(document.getElementById("headerTitle"));
var headerTitle = document.getElementById("headerTitle");
console.log(headerTitle);
// headerTitle.textContent = "Hello text content"
// headerTitle.innerText = "Hello text content";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = `<h3>heading</h3>`
var header = document.getElementById("mainHeader");
header.style.borderBottom = "solid 3px #000";