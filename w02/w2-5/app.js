const firstName = 'yun chen';
const lastName = 'Sie';
const age = '18';
const str = 'hello there my name is kelly';
const tags='web design,web development,programming';

let val;
val=firstName+lastName;

//concatenation
val=firstName+' '+lastName;
console.log(val);

//Append
val = 'olga';
val +='traversy';
console.log(val);

val = 'hello my name is'+firstName+'and i am'+age;
console.log(val);

//Escaping
val = 'That\'s awesome, i can\'t wait';
console.log(val);

//Length
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ',lastName);
console.log(val);

val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

val =firstName[0];
console.log(val);

//indexOf()
val = firstName.charAt('g');
console.log(val);
val = firstName.lastIndexOf('i');
console.log(val);

//charAt()
val = firstName.charAt('5');
console.log('var');

//get last char
val = firstName.charAt(firstName.length-1);
console.log(val);

//substring()
val = firstName.substring(0,5);
console.log(val);

//slice()
val = firstName.slice(0,5);
console.log(val);
val = firstName.slice(-5);
console.log(val);

//split
val = str.split(' ');
console.log(val);
val = tags.split(' ,');
console.log(val);


//replace()
val = str.replace('kelly','steve');
console.log(val);

//includes
val = str.includes('kelly');
console.log(val);
