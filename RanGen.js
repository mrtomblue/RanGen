// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const symbols = ["@","#","*","%","$","!","-","_"];
const lowercasLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// better odds of symbols and numbers being well mixed in
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["@", "#", "*", "%", "$", "!", "-", "_", "@", "#", "*", "%", "$", "!", "-", "_", "@", "#", "*", "%", "$", "!", "-", "_"];

let startCharacters = "";
let endCharacters = "";

const gen64 = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase, hasStartCharacters, hasEndCharacters) => {
    const availableCharacters = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? lowercasLetters : []),
        ...(hasUppercase ? uppercaseLetters : []),
        ...(hasStartCharacters ? startCharacters : []),
        ...(hasEndCharacters ? endCharacters : []),
    ];

    console.log(availableCharacters)

    let preProccessedNumbStfr = ""; 

    if (availableCharacters.length === 0) return "invalid input";

    for (let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        preProccessedNumbStfr += availableCharacters[randomIndex];
    }

    let numStfr = startCharacters + preProccessedNumbStfr + endCharacters;

    return numStfr;
}

console.log(gen64(12, true, true, true, true, false, false));
