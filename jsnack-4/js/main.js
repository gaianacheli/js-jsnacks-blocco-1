//snack 4

const invitati  = [ "Giulia","Paolo","francesco","mario","monia","andrea" ]
let invito = document.querySelector (".invito")


const nameUser = prompt('Inserisci il tuo nome')


let found = 'il tuo nome non è presente nella lista'

for (let i=0; i < invitati.length; i++) {
    if ( nameUser.toLowerCase() == invitati[i].toLowerCase()) {
        found = 'Il tuo nome è presente nella lista'
        console.log(found);
    }
}

invito.innerHTML = found