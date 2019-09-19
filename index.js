// vi har satt opp variablene for dere
const skjemaUttak = document.querySelector("#skjemaUttak");
const txtSaldo = document.querySelector("#txtSaldo");
const inpUttak = document.querySelector("#inpUttak");
const info = document.querySelector("#info");

let saldo = 20000;

function visSaldo() {
    // skriv din kode her
}

function taUtPenger(evt) {
    // skriv din kode her
}

// visSaldo kalles hver gang siden åpnes
visSaldo();

// når brukeren vil ta ut penger, så kjører vi taUtPenger-funksjonen
skjemaUttak.addEventListener("submit", taUtPenger);