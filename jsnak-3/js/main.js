//snak 3

let somma = 0 
const numeroFinale = document.querySelector('.numberTot')



for (let i = 0 ; i <= 9 ; i++ ) {
    let number = parseInt(prompt('Inserisci un numero'))
    if (number > 0)
    {
        somma = somma += number;
    }
numeroFinale.innerHTML = somma
}  