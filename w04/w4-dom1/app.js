let val;

val=document;   //框架
console.log(val);  

val=document.all;  //框架詳細使用程式
console.log(val);

val=document.all.length;
console.log(val);

val=document.all[1];
console.log(val);

val=document.body;  //val=document.xxx 那個框架裡呈現的東西
console.log(val);

val=document.head;
console.log(val);



val=document.forms;
console.log(val);

val=document.forms[0];
console.log(val);

val=document.forms[0].id;
console.log(val);

val=document.forms[0].method;
console.log(val);

val=document.forms[0].action;
console.log(val);

val=document.links;
console.log(val);

val=document.links[0];
console.log(val);

val=document.links[0].className;
console.log(val);

val=document.links[0].id;
console.log(val);

val=document.links[0].classList;
console.log(val);

val=document.links[0].classList[0];
console.log(val);

val=document.images;
console.log(val);

val=document.scripts;
console.log(val);

val=document.scripts[1].src;
console.log(val);

let scripts =document.scripts;

let scriptsArr= Array.from(scripts);
console.log(scriptsArr);

scriptsArr.forEach(function(scripts){
    console.log(scripts.getAttribute('src'))
})