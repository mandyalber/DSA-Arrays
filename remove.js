/*Remove characters

Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.*/
function removeChars(string, chars) {
    let result = ''

    //check if the char is inclued in list of chars to be removed
    const isChar = (char) => {
        for (let i = 0; i < chars.length; i++) {
            if (char === chars[i]) {
                return true
            }
        }
        return false
    }
    for (let i = 0; i < string.length; i++) {
        //check the string to see if each char is one of the list of chars
        if (!isChar(string.charAt(i))) {
            //if it is not, add it to the new string
            result += string.charAt(i)
        }
    }
    return result
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
//'Bttl f th Vwls: Hw vs. Grzny'
