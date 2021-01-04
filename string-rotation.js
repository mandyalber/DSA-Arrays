/*String rotation

Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.*/
function rotateString(string1, string2) {
    let temp = string1 + string1

    if (temp.includes(string2)){
        return true
    }
    return false
}

console.log(rotateString('amazon', 'azonma'))//false
console.log(rotateString('amazon', 'azonam'))//true
