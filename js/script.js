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

let elUserKm = (document.getElementById('Km').value);
console.log(elUserKm);
let elName = (document.getElementById('userName').value);
let elLastName = (document.getElementById('userLastName').value);
let elAge = (document.getElementById('age'));
let elButton = document.querySelector('.btn.btn-success');

// console.log(elName, elLastName, elAge, elButton);

let elBox = document.querySelector('.box');
//console.log(elBox);

elButton.addEventListener('click', function(){
    // console.log('hai cliccato il bottone');
    const km = elUserKm.value;   
    const userName = elName.value;
    const userLastName = elLastName.value;
    const age = elAge.value;
    elBox.innerHTML = userName;
})

let price = priceKm * Km;

if (age < 18) {
    price -= price * discountJr;
    console.log(price)
}else if (age >= 65) {
    price -= price * discountSr;
}

console.log(age);


/*
console.log(price);

document.getElementById('ticket').innerHTML = nameValue;
/*let message = `Il costo del biglietto è: ${price}`;
console.log(message);

ticketEl1.innerHTML = message;
*/