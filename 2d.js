/*2D array

Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.*/

function twoD(matrix) {
    let firstRowZero = false
    let firstColumnZero = false

    //check if first column should be set to zero
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            firstColumnZero = true
        }
    }

    //check if first row should be set to zero
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            firstRowZero = true
        }
    }

    //mark zeros on first row and column
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    //use mark to set elements
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }

    //set first column and row
    if (firstColumnZero) {
        for (let i = 0; i < matrix.length; i++)
            matrix[i][0] = 0
    }

    if (firstRowZero) {
        for (let i = 0; i < matrix[0].length; i++)
        matrix[0][i] = 0
    }
    return matrix
}

console.log(twoD([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
]))

/*Output:

[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [0,0,1,1,0]
]
*/