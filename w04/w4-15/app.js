// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert('Hello word!');

// Prompt
const input=prompt('Enter name:');
alert(input);  

// Confirm
if(confirm('Are you sure?')){
    console.log('YES');
}else{
    console.log("NO");
}

// Location Object
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.href);

// Redirect
window.location.href='https://www.google.com.tw/';

// History Object
window.history.go(-1);   

// Navigator Object
console.log(window.navigator);
console.log(window.navigator.appCodeName);
console.log(window.navigator.platform);