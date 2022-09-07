const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '~!@#$%^&*()-+=';

function getlowerCase() {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getupperCase() {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getnumbers() {
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getsymbols() {
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    
    if (upperEl.checked || lowerEl.checked || numberEl.checked || symbolEl.checked ){
        
        const len = lenEl.value;

        let password = '';
        
        for(let i=0; i < len ; i++){
            const x = generateX();
            password += x;
        }

        pwEl.innerText = password;

    }
    else{
        alert("You have to check atleast one box");
    }
}

function generateX(){
    const xs = [];

    if (upperEl.checked){
        xs.push(getupperCase());
    }

    if (lowerEl.checked){
        xs.push(getlowerCase());
    }

    if (numberEl.checked){
        xs.push(getnumbers());
    }

    if (symbolEl.checked){
        xs.push(getsymbols());
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);


copyEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password){return;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();

    textarea.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
    navigator.clipboard.writeText(textarea.value);

    //document.execCommand('copy');
    textarea.remove();
    alert('password copied');
});

