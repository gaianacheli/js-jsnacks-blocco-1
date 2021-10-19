//snack 8

const somma = document.querySelector('.somma')
let numberUser
do {
    numberUser= prompt ('Inserisci un numero  di quattro cifre') 
}while(numberUser.length!=4)

let risultato = parseInt(numberUser[0]) + parseInt(numberUser[1]) + parseInt(numberUser[2]) + parseInt(numberUser[3])

somma.innerHTML= risultato