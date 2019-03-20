// FUNCTION DECLARATIONS

function greet(firstName = 'andrew', lastName = 'cheng') {
    return `Hello ${firstName + lastName}`
}
console.log(greet())
console.log(greet('kelly', 'Sie'))
// FUNCTION EXPRESIONS

const square = function (x) {
    return x * x
}

console.log(square(5));
// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

;
(function () {
    console.log('IIFE Run')
})();


;
(function greet(firstName = 'andrew', lastName = 'cheng') {
    console.log(`Hello ${firstName + lastName}`);
})('kelly', 'Sie');
// PROPERTY METHODS

const todo = {
    add: function () {
        console.log("add todo...");
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    },
    delete: function(id){
        console.log(`Delete todo ${id}`)
    }
}
todo.add();
todo.edit(111);
todo.delete(11);