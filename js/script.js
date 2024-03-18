/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

alert("Clicca sul tasto play per giocare!");
//Selezione il bottone e lo metto in ascolto
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    
    //Seleziono la griglia
    const mainGrid = document.querySelector(".gridcontainer");
    //Tolgo la classe display:none e aggiungo display flex per farla apparire
    mainGrid.classList.add("d-flex");

//Creo un array vuoto dove inseriro i numeri generati random che non devono essere doppioni    
const listBomb = [];
for(let i = 1; i<=16; i++){
    const numberRandomCreated = randomNumber(100, 1)
    if (!listBomb.includes(numberRandomCreated)){
        listBomb.push(numberRandomCreated)
    } else(i--)
};
console.log(listBomb)
//Utilizzo un ciclo per crearmi 100 quadrati ed aggiungergli le rispettive classi
for(let i = 1; i <=100; i++){
    const createdSquare = square(i);
    mainGrid.append(createdSquare)
};

/*********************
 Functions
 ********************/

 //Creo una funzione per generare un quadrato
 //number è il numero del quadrato
 //return: ritorna un quadrato che appendo nel DOM  
 let score= 0;
 function square(number) {
    const createdSquare = document.createElement("div");
    createdSquare.innerHTML = `<span>${number}</span>`;
    createdSquare.classList.add("square","square-base");

    //Per ogni click sulla cella aggiungo la classe ai miei quadrati e stampo in console il numero della cella cliccata
    createdSquare.addEventListener("click", function(){
        score++;
        if ( listBomb.includes(number)) {
        createdSquare.classList.add("back-red")
        setTimeout(function () {
        alert("Mi dispiace, Hai perso!")
        alert("Il tuo punteggio è " + (score-1))
        mainGrid.innerHTML = "";
        }, 0);
        } else {
        createdSquare.classList.add("back-blue") 
        }
        console.log(number)
    })
    return createdSquare 
 }

})
//Creo una funzione per generare un numero random
function randomNumber(max, min){
    let number = Math.floor((Math.random() * max) + min);
    return number
}


