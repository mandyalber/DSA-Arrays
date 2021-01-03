/*Max sum in the array

You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.*/

function maxSum(array){
    let currentMax = 0
    let largestSum = 0

    for (let i = 0; i < array.length; i++){
         currentMax = Math.max(0, currentMax + array[i])
         largestSum = Math.max(currentMax, largestSum)
    }
    return largestSum 
}
console.log(maxSum([4, 6, -3, 5, -2, 1]))