//SNAK 2

const wordOne = prompt ('Scrivi una parola')
const wordTwo = prompt (`Scrivi un'altra parola `)
const wordWin = document.querySelector ('.word')


if (wordOne.length < wordTwo.length) {
    wordWin.append (wordOne + ' è la parola più corta ' + ' mentre ' + wordTwo + ' è la più lunga ') 
    //console.log(wordOne, wordTwo);
}else if (wordOne.length > wordTwo.length) {
    wordWin.append (wordTwo + " è la parola più corta " + ' mentre ' + wordOne + ' è la più lunga ' ) 
    //console.log(wordTwo, wordOne);
}else {
    wordWin.append ('SONO UGUALI') 
    //console.log('sono uguali');
}