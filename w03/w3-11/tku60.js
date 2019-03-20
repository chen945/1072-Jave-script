Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @jack206418070 Sign out
0
0 0 jack206418070/TKU-javascript
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
TKU-javascript/w03-11-forloop/all.js
@jack206418070 jack206418070 w03-loop
dce016f  16 minutes ago
81 lines (62 sloc)  1.11 KB
    
// FOR LOOP
for(let i = 1; i<=10; i++){
    if((i%2) === 0) console.log('Number:'+i)
}

// WHILE LOOP
let i = 1
while(i<=10){
    if((i%2) === 0){
        console.log('Number:'+i)
    }
    i++
}

// DO WHILE

let j = 1
do{
    if((j%2) === 0){
        console.log('Number:'+j)
    }
    j++
}while(j <= 10)



// LOOP THROUGH ARRAY
const cars = ['Ford','Honda','BMW','Toyota','Toyota','Ford','Honda','Ford','Honda',];

for(let i=0; i<cars.length; i++){
    console.log(`car${i+1}: ${cars[i]}`)
}

// FOREACH

cars.forEach((item,index,arr)=>{
    console.log(`car${index+1}: ${item}`)
})

let getCarsType = []
getCarsType = cars.filter((el,index,arr)=>{
    return arr.indexOf(el) === index
})

console.log(`carsType: ${getCarsType}`)
// MAP

const users = [
    {
        id: 1,
        name: 'Jack'
    },
    {
        id: 2,
        name: 'Mary'
    },
    {
        id:3,
        name: 'John'
    }
]

let names = users.map((user)=>{
    return user.name
})
console.log(names)



// FOR IN LOOP


const user = {
    firstName:'Jack',
    lastName:'Cheng',
    age:26
}

for(let item in user){
    console.log(`${item}: ${user[item]}`)
}
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
