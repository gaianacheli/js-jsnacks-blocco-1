//snack 6
const numberUser = parseInt(prompt('Inserisci un numero'));
const cubo = document.querySelector('.cubo');

for(let i=1; i<=numberUser; i++){
    let numerodastampare=i*i*i
    cubo.append(numerodastampare + " - ")
}

