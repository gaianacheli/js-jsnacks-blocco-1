//snack 9


let somma = 0
let pMedia = document.querySelector('.media')
let pSomma = document.querySelector('.risultato')

for (let i = 1; i <=10; i++){
    somma = somma + i 
   // console.log(i);
}
let media = somma / 10

pSomma.innerHTML= 'La somma è: ' + somma
pMedia.innerHTML= 'La media è: ' + media
