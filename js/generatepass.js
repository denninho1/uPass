/* 
--------- PAGE LOAD -------
*/
window.addEventListener('load', () => {
    inputRangeShow();
    innerPass()
});

/* 
------- GENERATE PASSWORD -------
*/
const generateInput = document.querySelector('#input_generate'),
      passLength = document.querySelector('#input_length'),
      generateText = document.querySelector('#generate_text'),
      checkboxUppercase = document.querySelector('#input_uppercase'),
      checkboxLowercase = document.querySelector('#input_lowercase'),
      checkboxNumbers = document.querySelector('#input_numbers'),
      checkboxSymbols = document.querySelector('#input_symbols'),
      generateBtn = document.querySelector('#generate_btn'),
      generateBtnCopy = document.querySelector('#generate_btn_copy');

function getRandomUpper() {
    const lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return lettersUppercase[Math.floor(Math.random() * lettersUppercase.length)];
}

function getRandomLower() {
    const lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
    return lettersLowercase[Math.floor(Math.random() * lettersLowercase.length)];
}

function getRandomNumbers() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbols() {
    const symbols = "!@#$%&*()-<>.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomChar = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumbers,
    symbol: getRandomSymbols,
}



function generatePassword(upper, lower, number, symbol, length) {
    let gPass = ""
    const typesCount = upper + lower + number + symbol;
    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter((item) => {
        return Object.values(item)[0]
    })

    for (let i = 0; i < length; i++){
        typesArray.forEach( type => {
            const funcName = Object.keys(type)[0];
            gPass += randomChar[funcName]();
        })
    }

    const finalyPass = gPass.slice(0, length);

    return finalyPass;
}

function innerPass() {
    const length = passLength.value;
    const hasUpper = checkboxUppercase.checked;
    const hasLower = checkboxLowercase.checked;
    const hasNumber = checkboxNumbers.checked;
    const hasSymbol = checkboxSymbols.checked;

    generateInput.value = generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length
    )
};

function inputRangeShow() {
    generateText.textContent = passLength.value;
};

passLength.addEventListener('input', () => {
    inputRangeShow();
    innerPass();
});

generateBtn.addEventListener('click', () => {
    innerPass()
});
