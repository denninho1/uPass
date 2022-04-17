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
const generateInput = document.querySelector('.input_generate'),
      passLength = document.querySelector('.input_length'),
      inputShowLength = document.querySelector('.length_number'),
      checkboxUppercase = document.querySelector('.input_uppercase'),
      checkboxLowercase = document.querySelector('.input_lowercase'),
      checkboxNumbers = document.querySelector('.input_numbers'),
      checkboxSymbols = document.querySelector('.input_symbols'),
      generateBtn = document.querySelector('.generate_btn'),
      generateBtnCopy = document.querySelector('.btn_copy'),
      formGenerate = document.querySelector('.generate_container'),
      copied = document.querySelector('.copied');

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
    inputShowLength.value = passLength.value;
};

function InputLengthShow () {
    passLength.value = inputShowLength.value;
}

function validateInputs() {
    if (inputShowLength.value > 40 ) {
        passLength.value = 40;
        inputShowLength.value = 40;
        innerPass();
    } else if (inputShowLength.value === 0) {
        passLength.value = 1;
        inputShowLength.value = 1;
        innerPass();
    }
}

passLength.addEventListener('input', () => {
    inputRangeShow();
    innerPass();
    validateInputs()
});

inputShowLength.addEventListener('input', () => {
    passLength.value = inputShowLength.value;
    innerPass();
    validateInputs();
});

generateBtn.addEventListener('click', () => {
    innerPass();
    validateInputs();
    generateBtn.innerText = "Gere outra senha"
});

formGenerate.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

generateBtnCopy.addEventListener('click', () => {
    generateInput.select();
    document.execCommand('copy');
    copied.classList.add('active');
    setTimeout(()=>{
        copied.classList.remove('active');
    }, 1000)

});