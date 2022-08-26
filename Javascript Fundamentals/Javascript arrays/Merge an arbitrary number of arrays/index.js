// ----------------

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// ----------------

function myFunction(...arrays) {
    const array = Array.from(arrays)
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const element = array[i][j];
            newArray.push(element)
        }
        
    }
    return newArray
}


//Test Cases:

console.log(myFunction([1, 2, 3], [4, 5, 6]));              //Expected Output 👉 [1, 2, 3, 4, 5, 6]
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));        //Expected Output 👉 ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ['a', 'b']));  //Expected Output 👉 [true, true, 1, 2, 'a', 'b']

//The author's solution

function myFunction( ...arrays ) { //didnt know this method sadgi :(
    return arrays.flat()
}