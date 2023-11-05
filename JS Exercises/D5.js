/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

//non so perche' se l'esercizio non e' aperto su vscode mi stampa cose diverse in console tipo 2 volte dog...

console.log('ESERCIZIO 1');

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i=0; i < pets.length; i++) {
  console.log(pets[i])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('ESERCIZIO 2');

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('ESERCIZIO 3');

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log('ESERCIZIO 4');

pets.shift();
pets.push('dog');
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log('ESERCIZIO 5');

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'GG' + Math.floor(Math.random() * 1000) + 'KV'; 
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log('ESERCIZIO 6');

const newCar = {
  brand: 'Volkswagen',
  model: 'Golf',
  color: 'grey',
  trims: ['active', 'Alltrack', 'GTI'],
  licensePlate: 'GG' + Math.floor(Math.random() * 1000) + 'KV',
}

cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

console.log('ESERCIZIO 7');

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('ESERCIZIO 8');

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log('ESERCIZIO 9');

let i = 0;

while (i < numericArray.length) {
  if (numericArray[i] === 66) {  // non ho capito se il 32 andava stampato o no, nel dubbio l'ho stampato mettendo come limite 66
    break;
  }
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

console.log('ESERCIZIO 10');

const alfabetoItaliano = 'abcdefghijklmnopqrstuvwxyz';
const italianCharacters = [];

for (let i = 0; i < alfabetoItaliano.length; i++) {   
  const character = alfabetoItaliano[i];

  switch (character) {
    case 'a':
      italianCharacters.push(1);
      break;
    case 'b':
      italianCharacters.push(2);
      break;
    case 'c':
      italianCharacters.push(3);
      break;
    case 'd':
      italianCharacters.push(4);
      break;
    case 'e':
      italianCharacters.push(5);
      break;
    case 'f':
      italianCharacters.push(6);
      break;
    case 'g':
      italianCharacters.push(7);
      break;
    case 'h':
      italianCharacters.push(8);
      break;
    case 'i':
      italianCharacters.push(9);
      break;
    case 'j':
      italianCharacters.push(10);
      break;
    case 'k':
      italianCharacters.push(11);
      break;
    case 'l':
      italianCharacters.push(12);
      break;
    case'm':
      italianCharacters.push(13);
      break;
    case 'n':
      italianCharacters.push(14);
      break;
    case 'o':
      italianCharacters.push(15);
      break;
    case 'p':
      italianCharacters.push(16);
      break;
    case 'q':
      italianCharacters.push(17);
      break;
    case 'r':
      italianCharacters.push(18);
      break;
    case's':
      italianCharacters.push(19);
      break;
    case 't':
      italianCharacters.push(20);
      break;
    case 'u':
      italianCharacters.push(21);
      break;
    case 'v':
      italianCharacters.push(22);
      break;
    case 'w':
      italianCharacters.push(23);
      break;
    case 'x':
      italianCharacters.push(24);
      break;
    case 'y':
      italianCharacters.push(25);
      break;
    case 'z':
      italianCharacters.push(26);
      break;
    default: 
  }}

  console.log(italianCharacters);