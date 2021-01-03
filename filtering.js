/*Filtering an array

Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.*/

function filter(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(filter([10, -1, 5, 8, 6, 2, 1, 3, 4]))