// ----------------

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// ----------------

function myFunction(a, b) {
    
    return a.filter(number => number > b).reduce((total, value) => total + value, 0)
}


//Test Cases:

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));  //Expected Output 👉 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)); //Expected Output 👉 1
console.log(myFunction([78, 99, 100, 101, 401], 99));    //Expected Output 👉 602

//The author's solution

function myFunction(a, b) {
    return a.reduce((sum, cur) => {
        if (cur > b) return sum + cur;
        return sum;
    }, 0);
}