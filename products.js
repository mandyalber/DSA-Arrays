/*Products

Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.*/

function products (array){
    let output = []

    //loop through the array
    for (let i=0;i< array.length;i++){
        //store the products of indexes
        let product = 1
        //loop through to multiply all but current index
        for (let j = 0; j < array.length; j++){
            if (i != j){
                product *= array[j]
            }
        }
        //add each product to a new array
        output.push(product)
    }
    return output
}

console.log(products([1, 3, 9, 4]))//[108, 36, 12, 27]