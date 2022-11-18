// creo i buttons sull'html e li richiamo con il "getElementById"
// creo le let per i numeri da generare e l'array
const buttonEl = document.getElementById("button");
const genNumEl = document.getElementById("numgen");
let totNum;
let numList = [];

// aggiungo la funzione al bottone 
// genero i numeri e poi li stampo in html
// inserisco il timer "setTimeout" 
buttonEl.addEventListener("click", function() {
    totNum = generateNumList(100);
    genNumEl.innerHTML = `${numList}`;
    console.log(numList);

    // ho abbassato i secondi perchè ogni volta che provavo sennò era un parto
    setTimeout(emptyHtml, 5000);
    setTimeout(userNumbers, 5000);
})

function generateRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// creo la funzione per non avere i doppioni 
function generateNumList(totNum) {
    numList = [];

    while (numList.length < 5) {
        const num = generateRandomNumber(1, totNum);
        if (!numList.includes(num)) {
            numList.push (num);
        }
    }
    return numList;
}
// reset per l'empty html 
function emptyHtml() {
    genNumEl.innerHTML = ``;
}
// creo la funzione dei numeri dell'utente inseriti che dà il risultato se giusto o sbagliato
// creo un ciclo "for" di "i < 5" per i 5 numeri da ciclare e con il prompt chiedo di inserirli
// creo condizioni per il quale se "numList include numInput" per 5 volte per forza hai indovinato tutti e 5 i numeri
//  altrimenti creo un else con un alert e basta dove dico che i numeri non sono esatti
function userNumbers() {
    const numFound = [];

    for (i = 0; i < 5; i++) {
        const numInput = prompt("Inserisci i numeri");

        if (numList.includes(parseInt(numInput))) {
            numFound.push(numInput);
            if (numFound.length === 5) {
                alert("Hai indovinato tutti i numeri");
            }
        } else {
            alert("I numeri che hai inserito sono sbagliati");
            return
        }
    }
}