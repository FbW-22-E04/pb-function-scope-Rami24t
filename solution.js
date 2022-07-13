// Function Scope
// 1. Print Exponential Values
//    Write a function that accepts two numbers and validate that they are numbers.
//After that, the function should print y exponential values starting from x.
//    For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
//    function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
function exponential(num1, num2){
    if(typeof num1 == typeof num2 && typeof num2 == "number")
    {
    let exponentials = '';
    for(i=1;i<=num2;i++)
        {
//        console.log(Math.pow(num1,i));
          exponentials += num1**i + ' ';
        }
    return exponentials.slice(0, -1);
    }
}
console.log(exponential(3,5));

// 2. Fruits
//    Create a function named printFavoriteFruit. Declare a variable called fruit outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let fruit='orange'
function printFavoriteFruit(){
let fruit = 'x'
console.log('My favorite fruit is:', fruit)
};
printFavoriteFruit();

// 3. Multiply a Number by Itself
//    Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
//    Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
function exponent(num1, num2){
    if(typeof num1 == typeof num2 && typeof num2 == "number")
    {
    let result = -1;
    result = num1**num2;
    return result;
    }
}
console.log(exponent(2,3));

// console.log(result);
// result is not defined outside the scope of the function because I declared it within the function and thus it's scope is limited to the scope of the function.
