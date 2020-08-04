const $inputNumero = document.querySelector('.input-numero');
const $inputFrase = document.querySelector('.input-frase');
const $button = document.querySelector('.button');
const $frase = document.querySelector('.frase');
const $resetar = document.querySelector('.button-resetar');

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let letra = '';
let criptografado = '';
let texto = '';

const letras = () => {    
    for(let i = 0; i < $inputFrase.value.length; i++){
        criptografado = alfabeto.indexOf($inputFrase.value[i]) + parseInt($inputNumero.value);
        let numero = criptografado % alfabeto.length;
        texto += alfabeto[numero];
        console.log(numero);
    }
}


$button.addEventListener('click', () => {
    texto = '';
    $frase.textContent = '';
    letra = $inputFrase.value;
    letras();
    $frase.textContent = texto; 
})

$resetar.addEventListener('click', () => {
    letra = '';
    criptografado = '';
    texto = '';
    $frase.textContent = '';
    $inputFrase.value = '';
    $inputNumero.value = '';
})
