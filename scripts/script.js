// for (let index = 0; index < 11; index++) {
//     console.log(2**(index))
// }

// let i = 1
// while (i<11) {
//     console.log(2**i)
//     i++
// }

let input;
do{
input = prompt('what is your name?'); //always returns string
console.log(Number(input));
}
while(isNaN(input) != true); // if user enters a number the result of Number() is a number, else it is NaN


//alert('hello '+input)
alert(`hello ${input}`)

let fruits = ['Apple', 'Banana'];
fruits.push('Orange');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('Mango');
console.log(fruits);
fruits.shift();
console.log(fruits);
