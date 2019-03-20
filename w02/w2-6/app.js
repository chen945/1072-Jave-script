const name = 'andrew';
const age = '24';
const job = 'web Developer';
const city = 'taipei';
let html;

//withouts template strings (es5)

html = '<ul>' +
    '<li> Name: ' + name + '</li>';
'<li> Age: ' + age + '</li>';
'<li> Job: ' + job + '</li>';
'<li> City: ' + city + '</li>';
'</ul';

document.body.innerHTML = html;

//with temlate strings (es6)
function hello() {
    return 'hello';
}


html = `
<ul>
<li> Name: ${name}</li>
<li> Age: ${age}</li>
<li> job: ${job}</li>
<li> city: ${city}</li>
<li> ${(age>= 30 ? 'Over 30' : 'Under 30')}</li>
<li> ${hello()}</li>
</ul>
`;

document.body.innerHTML = html;