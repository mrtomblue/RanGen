// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const symbols = ["@","#","*","%","$","!","-","_"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// better odds of symbols and numbers being well mixed in
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["@", "#", "*", "%", "$", "!", "-", "_", "@", "#", "*", "%", "$", "!", "-", "_", "@", "#", "*", "%", "$", "!", "-", "_"];

let startCharacters = "";
let endCharacters = "";
let startCharactersStatus = "";
let endCharactersStatus = "";

let lengthLimit = 200

const gen64 = (length, hasUppercase, hasLowercase, hasNumbers, hasSymbols, hasStartCharacters, hasEndCharacters) => {
    const availableCharacters = [
        ...(hasUppercase ? uppercaseLetters : []),
        ...(hasLowercase ? lowercaseLetters : []),
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        // hasStartCharacters = startCharacters,
        // hasEndCharacters = endCharacters,
        ...(hasStartCharacters ? startCharacters : []),
        ...(hasEndCharacters ? endCharacters : []),
    ];

    // console.log(hasStartCharacters)
    // console.log(hasEndCharacters)

    // console.log(availableCharacters);

    // startCharacters = startValue
    // endCharacters = endValue

    let preProcessedNumbStfr = "";

    // if (availableCharacters.length === 0) return "invalid input";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        preProcessedNumbStfr += availableCharacters[randomIndex];
    }

    // let numStfr = preProcessedNumbStfr;

    // if (hasStartCharacters != false) {
    //     startCharactersStatus = startCharacters
    // };

    // if (startCharacters == true && endCharacters == true) {
        // let numStfr = `${hasStartCharacters} + ${preProcessedNumbStfr} + ${hasEndCharacters}`;
    // }

    if (hasStartCharacters !== false) {
        startCharacters = hasStartCharacters;
    }

    if (hasEndCharacters !== false) {
        endCharacters = hasEndCharacters;
    }

    // if (hasStartCharacters === false) {
    //     startCharacters = "";
    // }

    // if (hasEndCharacters === false) {
    //     endCharacters = "";
    // }

    let numStfr = startCharacters + preProcessedNumbStfr + endCharacters;

    // console.log(startCharacters);
    // console.log(endCharacters);

    return numStfr;
}

// console.log(startCharacters)

console.log(gen64(12, true, true, true, true, false, false));
// console.log(startCharacters)
// console.log(`"${endCharacters}"`)

// let GenUppercase = document.getElementById("Option_Uppercase-Checkbox").checked;
// let GenLowercase = document.getElementById("Option_Lowercase-Checkbox").checked;
// let GenNumbers = document.getElementById("Option_Numbers-Checkbox").checked;
// let GenSymbols = document.getElementById("Option_Symbols-Checkbox").checked;
// let GenLength = document.getElementById("Option_Length-RangeSlider").value;

document.getElementById("RanGen_Output").value = gen64(12, true, true, true, true, false, false);

document.getElementById("Option_Length-RangeSlider_Text-input").value =
    document.getElementById("Option_Length-RangeSlider").value;

// let outputCopyButton = document.getElementById("RanGen_Output-Copy_Clipboard");

function CopyGen64() {
    var copyText = document.getElementById("RanGen_Output");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

// outputCopyButton.addEventListener("click", CopyGen64())

let GenUppercase = document.getElementById("Option_Uppercase-Checkbox").checked;
let GenLowercase = document.getElementById("Option_Lowercase-Checkbox").checked;
let GenNumbers = document.getElementById("Option_Numbers-Checkbox").checked;
let GenSymbols = document.getElementById("Option_Symbols-Checkbox").checked;
let GenLength = document.getElementById("Option_Length-RangeSlider").value;
let GenStartCharacters = document.getElementById("Option_Character-Start").value;
let GenEndCharacters = document.getElementById("Option_Character-End").value;

console.log(`${GenStartCharacters} annnnnd of course ${GenEndCharacters}`);

let inputRange = document.getElementById("Option_Length-RangeSlider");
let range = inputRange.value;
let inputRangeText = document.getElementById("Option_Length-RangeSlider_Text-input");
let inputRefresh = document.getElementById("RanGen_Output-Reload");
let checkboxUppercase = document.getElementById("Option_Uppercase-Checkbox");
let checkboxLowercase = document.getElementById("Option_Lowercase-Checkbox");
let checkboxNumbers = document.getElementById("Option_Numbers-Checkbox");
let checkboxSymbols = document.getElementById("Option_Symbols-Checkbox");
let inputStartCharacters = document.getElementById("Option_Character-Start");
let inputEndCharacters = document.getElementById("Option_Character-End");
// let checkboxUppercaseChecked = document.getElementById("Option_Uppercase-Checkbox").ariaChecked;

inputRange.addEventListener("input", (e) => {
    // onchange ...

    let range = e.target.value;
    // rangeText = range;
    document.getElementById("Option_Length-RangeSlider_Text-input").value = range;
    // console.log(range);
    inputRange.style.setProperty(
        "--input-range-filled",
        `${inputRange.value / 2}%`
    );

    // document.getElementById("Option_Length-RangeSlider_Text-input").value = GenLength;
    // GenLength = e.target.value

    // GenLength = range
});

inputRange.addEventListener("change", (e) => {
    // onchange ...

    let range = e.target.value;
    // rangeText = range;
    document.getElementById("Option_Length-RangeSlider_Text-input").value = range;
    // console.log(range);

    // GenLength = range;
    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
})

inputRangeText.addEventListener("change", (e) => {
    // onchange ...
    
    range = e.target.value;
    document.getElementById("Option_Length-RangeSlider").value = range;
    let rangeText = e.target.value;
    // console.log(rangeText);
    inputRange.style.setProperty(
        "--input-range-filled",
        `${inputRange.value / 2}%`
    );

    // document.getElementById("Option_Length-RangeSlider_Text-input").value =
    // GenLength;
    // GenLength = range;

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

inputRefresh.addEventListener("click", (e) => {

    range = document.getElementById("Option_Length-RangeSlider_Text-input").value;
    // console.log(range);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

checkboxUppercase.addEventListener("change", (e) => {
    // onchange ...
    GenUppercase = e.target.checked;

    range = document.getElementById("Option_Length-RangeSlider_Text-input").value;

    // document.getElementById("Option_Length-RangeSlider").value = range;
    // console.log("heheh change ig");

    // document.getElementById("Option_Length-RangeSlider_Text-input").value =
    // GenLength;
    // GenLength = range;

    console.log(GenUppercase);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

checkboxLowercase.addEventListener("change", (e) => {
    // onchange ...
    GenLowercase = e.target.checked;
    range = document.getElementById("Option_Length-RangeSlider_Text-input").value;
    // document.getElementById("Option_Length-RangeSlider").value = range;
    console.log("heheh change ig");
    console.log(GenLowercase);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

checkboxNumbers.addEventListener("change", (e) => {
    // onchange ...
    GenNumbers = e.target.checked;
    range = document.getElementById("Option_Length-RangeSlider_Text-input").value;
    // document.getElementById("Option_Length-RangeSlider").value = range;
    console.log("heheh change ig");
    console.log(GenNumbers);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

checkboxSymbols.addEventListener("change", (e) => {
    // onchange ...
    GenSymbols = e.target.checked;
    range = document.getElementById("Option_Length-RangeSlider_Text-input").value;
    // document.getElementById("Option_Length-RangeSlider").value = range;
    console.log("heheh change ig");
    console.log(GenSymbols);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

inputStartCharacters.addEventListener("change", (e) => {
    GenStartCharacters = e.target.value

    console.log(`${GenStartCharacters} annnnnd of course ${GenEndCharacters}`);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

inputEndCharacters.addEventListener("change", (e) => {
    GenEndCharacters = e.target.value

    console.log(`${GenStartCharacters} annnnnd of course ${GenEndCharacters}`);

    updateOutput(range, GenUppercase, GenLowercase, GenNumbers, GenSymbols, GenStartCharacters, GenEndCharacters);
});

function updateOutput(inRange, inUppercase, inLowercase, inNumbers, inSymbols, inStart, inEnd) {
    // let GenUppercase = document.getElementById("Option_Uppercase-Checkbox").checked;
    // let GenLowercase = document.getElementById("Option_Lowercase-Checkbox").checked;
    // let GenNumbers = document.getElementById("Option_Numbers-Checkbox").checked;
    // let GenSymbols = document.getElementById("Option_Symbols-Checkbox").checked;
    // let GenLength = document.getElementById("Option_Length-RangeSlider").value;

    // GenLength = document.getElementById("Option_Length-RangeSlider").value;
    GenLength = inRange

    document.getElementById('RanGen_Output').value = gen64(GenLength, GenUppercase, GenLowercase, GenNumbers, GenSymbols, inStart, inEnd);

    // document.getElementById('Option_Length-RangeSlider_Text-input').value = GenLength
    document.getElementById("RanGen_Output").style.color = "var(--color-dark)";
    document.getElementById("RanGen_Output").style.fontFamily = "var(--font-default)";
    document.getElementById("Option_Length-RangeSlider_Text-input").style.color = "var(--color-dark)";
    document.getElementById("Option_Length-RangeSlider_Text-input").style.fontFamily = "var(--font-default)";

    if (document.getElementById("Option_Length-Error").style.display == "flex") {
        
        const errorStyleDisplayNone = () => document.getElementById("Option_Length-Error").style.display = "none";

        document.getElementById("Option_Length-Error").style.animationDelay = "3s";
        document.getElementById("Option_Length-Error").style.animation = "error-hidden var(--uc-quinary-animation-speed) forwards";
        console.log("hmm flex")
        setTimeout(errorStyleDisplayNone, 100)
        // document.getElementById("Option_Length-Error").style.display = "none";
    }

    if (document.getElementById("Option_Character-Error").style.display == "flex") {
        const errorStyleDisplayNone = () => (document.getElementById("Option_Character-Error").style.display ="none");

        document.getElementById("Option_Character-Error").style.animationDelay = "3s";
        document.getElementById("Option_Character-Error").style.animation = "error-hidden var(--uc-quinary-animation-speed) forwards";
        console.log("hmm flex");
        setTimeout(errorStyleDisplayNone, 100);
        // document.getElementById("Option_Length-Error").style.display = "none";
    }

    const outputErrorSettings = () => {
        document.getElementById("RanGen_Output").value = "Invalid Input";
        document.getElementById("RanGen_Output").style.color = "var(--color-error)";
        document.getElementById("RanGen_Output").style.fontFamily = "var(--font-code)";
    }
    
    if (GenLength > lengthLimit) {

        document.getElementById("Option_Length-Error_Text").innerText = inputError(1, "length given");

        outputErrorSettings();

        document.getElementById("Option_Length-RangeSlider_Text-input").style.fontFamily = "var(--font-code)";
        document.getElementById("Option_Length-RangeSlider_Text-input").style.color = "var(--color-error)"; 
        document.getElementById("Option_Length-Error").style.display = "flex";
        document.getElementById("Option_Length-Error").style.animation = "error var(--uc-quinary-animation-speed) forwards";
    }

    if (GenUppercase === false & GenLowercase === false && GenNumbers === false && GenSymbols === false) {
        document.getElementById("Option_Character-Error_Text").innerText =
            inputError(0, "characters");

        outputErrorSettings();

        // document.getElementById(
        //     "Option_Length-RangeSlider_Text-input"
        // ).style.fontFamily = "var(--font-code)";
        // document.getElementById(
        //     "Option_Length-RangeSlider_Text-input"
        // ).style.color = "var(--color-error)";
        document.getElementById("Option_Character-Error").style.display =
            "flex";
        document.getElementById("Option_Character-Error").style.animation =
            "error var(--uc-quinary-animation-speed) forwards";
    }

    // inputError(1, false, "value");
}

let uppercaseInputCheckbox = document.getElementById("Option_Uppercase-Checkbox");
let uppercaseInputCheckboxAltButton = document.getElementById("Option_Uppercase-Checkbox--Alt__button");
let uppercaseInputCheckboxAltCheck = document.getElementById("Option_Uppercase-Checkbox--Alt__check");

// if (uppercaseInputCheckbox.checked) {
//     console.log("checked am i??");
// }
// uppercaseInputCheckboxAltCheck.style.display = "none"

function capitalize(input) {
    return(
        input.replace(/^./, (str) => str.toUpperCase())
    )
}

function noSpaces(input) {
    return (
        input.replace(/\s+/g, "")
    );
}

function noStartEndSpaces(input) {
    return (
        input.replace(/^\s+|\s+$/g, "")
    ); 
}

function inputError(errorType, errorVersion) {

    let errorT = errorType
    // let errorD = errorDisplayDestination
    let errorV = noStartEndSpaces(errorVersion.toString());

    switch (errorType) {
        case 0:
            errorT = `No ${errorV} given.`;
            break;
        case 1:
            errorT = `${capitalize(errorV)} exceeds the limit.`;
            break;
        default:
            errorT = "Error. Unspecified.";
    }

    // errorD = errorT
    console.error(errorT)
    // console.log(errorD)

    return (
        errorT
    );
}
 