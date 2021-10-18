const numbers = []


for (let i=0; i < 6; i++){
    const numberUser = parseInt(prompt('Inserisci un numero'))
    if(numberUser==0 || numberUser==1){
    }
    else if (numberUser%2==1){
        numbers.push(numberUser)
        console.log(numbers);
    }
}
console.log(numbers)