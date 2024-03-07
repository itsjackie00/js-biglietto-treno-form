/* alert('funziona?'); */

// ASSIGMENT
/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

/*
// OBBIETIVO
- Calcolare il prezzo del biglietto (userKm * 0.21)
- Stampare un messaggio col prezzo sulla pagina

VARIABILI
const priceKm = 0.21;
let userKm = parseInt('Quanti chilometri vuoi percorre ?');
let price = priceKm * userKm;

let ticketEl1 = document.getElementById('ticket')
let message;

let scontoJr = 20 / 100;
let scontoSr = 40 / 100;
calcolo (price - price * discount)

let age = parseint("Inserisci l'età ..");
se l'utente ha meno di 18 anni discountJr se ha almeno 65 anni discountSr
altrimenti prezzo pieno
*/

const priceKm = 0.21;
const discountJr = 20 / 100;
const discountSr = 40 / 100;

// message
/* let ticketEl1 = (document.getElementById('ticket').value);
console.log(ticketEl1); */

let elUserKm = (document.getElementById('Km'));
console.log(elUserKm.value);
let elName = (document.getElementById('userName'));
let elLastName = (document.getElementById('userLastName'));
let elAge = (document.getElementById('age'));
let elButton = document.querySelector('.btn.btn-success');

// console.log(elName, elLastName, elAge, elButton);

elButton.addEventListener('click', function () {
    let price = priceKm * elUserKm.value;

    if (elAge.value < 18) {
        price -= price * discountJr;
        document.getElementById('discount').innerHTML =
        `${discountJr * 100}%`;

    } else if (elAge.value >= 65) {
        price -= price * discountSr;
        document.getElementById('discount').innerHTML =
        `${discountSr * 100}%`;

    } else {
        document.getElementById('discount').innerHTML =
        `0%`;
    }

    // console.log('hai cliccato il bottone');
    const km = elUserKm.value;
    document.getElementById('price').innerHTML =
        `€ ${price.toFixed(2)}`;
    document.getElementById('user').innerHTML =
        `${elName.value} ${elLastName.value}`;
}
)
