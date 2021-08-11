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

function decode(expr) {
    let result = [];
    for (let i = 0; i <= expr.length; i += 10) {
        result.push(expr.slice(i, i + 10));
    }
    return result
    .map(item => item.replace(/10/g, '.'))
    .map(item => item.replace(/11/g, '-'))
    .map(item => item.replace(/0/g, ''))
    .map(item => item.replace(/\*{10}/g, ' '))
    .map(item => item == ' ' ? item : MORSE_TABLE[item])
    .join('');
    };


module.exports = {
    decode
}