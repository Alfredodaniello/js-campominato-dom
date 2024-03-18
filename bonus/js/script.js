/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/




alert("Clicca sul tasto play per giocare!");

//Seleziono la select del mio DOM
//La metto in ascolto di un "change" affinchè l'utente possa scegliere diverse soluzioni
//Controllo il valore delle mie option
//Creo condizioni affinchè parta la griglia giusta a seconda della difficolta selezionata dall'utente
const CoicheDifficulty = document.querySelector(".form-select");
CoicheDifficulty.addEventListener("click", function() {
    const difficulty = this.value;
    if (difficulty === "easy") {
        //Una volta che l'utente ha selezionato la difficolta metto il bottone play in attesta di un click 
        const btn = document.querySelector("#btn");
        btn.addEventListener("click", function() {

            //Seleziono la griglia nel mio Dom
            //Tolgo la classe display:none e aggiungo display flex per farla apparire 
            const mainGrid = document.querySelector(".gridcontainer");
            mainGrid.innerHTML = "";
            mainGrid.classList.remove("d-none");
            mainGrid.classList.add("d-flex");
            //Creo un array vuoto dove inseriro i numeri generati random che non devono essere doppioni    


            //Utilizzo un ciclo e richiamo la mia funzione per crearmi 100 quadrati
            //Aggiungo le classi ai quadrati creati
            //Appendo alla mia griglia i quadrati creati

            for (let i = 1; i <= 100; i++) {
                const createdSquare = square(i);
                createdSquare.classList.add("square", "square-base");
                mainGrid.append(createdSquare)
            }
        });

        /* Se l'utente sceglie la difficolTà media cambiero solamente la classe"square-base" con "square-bonusdiff2" 
        che modifica la dimensione dei miei quadrati */
    } else if (difficulty === "medium") {
        const btn = document.querySelector("#btn");
        btn.addEventListener("click", function() {
            //Seleziono la griglia
            const mainGrid = document.querySelector(".gridcontainer");
            mainGrid.innerHTML = "";
            mainGrid.classList.remove("d-none");
            mainGrid.classList.add("d-flex");
            for (let i = 1; i <= 81; i++) {
                const createdSquare = square(i);
                createdSquare.classList.add("square", "square-bonusdiff2");
                mainGrid.append(createdSquare)
            }
        });

        /* Se l'utente sceglie la difficolTà difficile cambiero solamente la classe "square-bonusdiff2" con "square-bonusdiff3" 
        che modifica la dimensione dei miei quadrati */
    } else {
        const btn = document.querySelector("#btn");
        btn.addEventListener("click", function() {
            const mainGrid = document.querySelector(".gridcontainer");
            mainGrid.innerHTML = "";
            mainGrid.classList.remove("d-none");
            mainGrid.classList.add("d-flex");
            for (let i = 1; i <= 49; i++) {
                const createdSquare = square(i);
                createdSquare.classList.add("square", "square-bonusdiff3");
                mainGrid.append(createdSquare)
            }
        });
    }
});

const listBomb = [];
for(let i = 1; i<=16; i++){
    const numberRandomCreated = randomNumber(100, 1)
    if (!listBomb.includes(numberRandomCreated)){
        listBomb.push(numberRandomCreated)
    } else(i--)
};
console.log(listBomb)

/*********************
    FUNCTIONS
********************/

//Creo una funzione per generare un quadrato
//number è il numero del quadrato
//return: ritorna un quadrato che appendo nel DOM
let score= 0;
function square(number) {
    const createdSquare = document.createElement("div");
    createdSquare.innerHTML = `<span>${number}</span>`;

  //Per ogni click sulla cella aggiungo la classe ai miei quadrati e stampo in console il numero della cella cliccata
  createdSquare.addEventListener("click", function(){
    score++;
    if ( listBomb.includes(number)) {
    createdSquare.classList.add("back-red")
    setTimeout(function () {
    alert("Mi dispiace, Hai perso!")
    alert("Il tuo punteggio è " + (score-1))
    }, 250);
    } else {
    createdSquare.classList.add("back-blue") 
    }
    console.log(number)
})
return createdSquare 
}

//Creo una funzione per generare un numero random
function randomNumber(max, min){
    let number = Math.floor((Math.random() * max) + min);
    return number
}
