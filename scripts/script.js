// for (let index = 0; index < 11; index++) {
//     console.log(2**(index))
// }

// let i = 1
// while (i<11) {
//     console.log(2**i)
//     i++
// }

// let input;
// do{
// input = prompt('what is your name?'); //always returns string
// console.log(Number(input));
// }
// while(isNaN(input) != true); // if user enters a number the result of Number() is a number, else it is NaN


// //alert('hello '+input)
// alert(`hello ${input}`)

// let fruits = ['Apple', 'Banana'];
// fruits.push('Orange');
// console.log(fruits);
// fruits.pop(); // returns final value for fruits, but shows during the step 
// console.log(fruits);
// fruits.unshift('Mango');
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// for(let i = 0; i< fruits.length; i++){
//     console.log(fruits[i])
// }

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}

console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)


let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
let counter = 0
for(let item of students){
    if(item.program == 'CIT' && item.GPA > 3){
        console.log(item)
        counter = counter+1
    }
}
console.log(counter);