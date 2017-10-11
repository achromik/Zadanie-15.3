//intro
//const sayHello = () => alert('hello world');
//sayHello();

//******************zadanie 1
let a = 'Hello',
    b = 'World';
let result = `${a} ${b}`;


//******************zadanie 2 
const multiply= (a , b =1) => a * b;

//test
console.log(multiply(2,5));
console.log(multiply(6,6));
console.log(multiply(5));



//******************zadanie 3
const average = (...args) => {
    let sum = 0 ;
    args.forEach(arg => sum += arg);
    return sum/args.length;
};

//test
console.log('zad3');
console.log(average(1));
console.log(average(2,3));
console.log(average(1,3,6,6));



//*****************-zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

//test
console.log(average(...grades));



//******************zadanie 5
const freakStructure = [1, 4, 'Iwona', false, 'Nowak'];
let [,,firstName, ,lastName] = freakStructure;

//test
console.log(`${firstName} ${lastName}`);