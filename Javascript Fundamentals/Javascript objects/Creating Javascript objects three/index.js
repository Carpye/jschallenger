// ----------------

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// ----------------

function myFunction(a, b) {
    const obj = {}
    a.forEach((el, i) => obj[el] = b[i])
    return obj
}


//Test Cases:

console.log(myFunction(['a','b','c'],[1,2,3]));         //Expected Output 👉 {a:1,b:2,c:3}
console.log(myFunction(['w','x','y','z'],[10,9,5,2]));  //Expected Output 👉 {w:10,x:9,y:5,z:2}
console.log(myFunction([1,'b'],['a',2]));               //Expected Output 👉 {1:'a',b:2}

//The author's solution

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}