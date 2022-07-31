const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let smashString = (str) => {
    let array = [];
    for (let i = 0; i < str.length; i = i+10) {
    array.push(str.slice(i, i+10));
    };
    return array;
}

let decodeVal = (item) => {
    let plus = '';
    for (let j = 0; j < (item.length - 1); j = j + 2){
        if (item[j] === '1' && item[j+1] === '0') {
            plus += '.';
        } else if(item[j] === '1' && item[j+1] === '1') {
            plus += '-';
        };
    };
    return plus;
};

let findCode = (item) => {
    for (key in MORSE_TABLE) {
        if (item === key) {
            return MORSE_TABLE[key];
        };
    };
};

function decode(expr) {
    let smashTen = smashString(expr);
    
    let arrCode = smashTen.map(value => {
        if (value === '**********') {
            return ' '
        } else {
            return decodeVal(value)   
        };
    });

    let message = arrCode.reduce((strCode, value) => {
        if(value !== ' ') {
            strCode += findCode(value) 
        } else {
            strCode += value
        };
        return strCode;

    },'');

    return message;
}


module.exports = {
    decode
}