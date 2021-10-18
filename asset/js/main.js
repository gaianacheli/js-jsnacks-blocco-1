const numberOne = prompt('Inserisci un numero');
alert(numberOne)
const numberTwo = prompt(`Inserisci un'altro numero`);
alert(numberTwo)
const numberWin = document.querySelector('.number')

if (numberOne < numberTwo) {
 // console.log('Il più grande è ' + numberTwo);
  numberWin.innerHTML = 'Il più grande è ' + numberTwo
    
}else if (numberOne > numberTwo) {
   // console.log( 'Il più grande è ' + numberOne );
    numberWin.innerHTML = 'Il più grande è ' + numberOne 
}else {
    numberWin.innerHTML = 'NESSUNO'
}