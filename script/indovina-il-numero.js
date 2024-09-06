// Seleziona gli elementi dalla pagina HTML utilizzando il loro ID.
const tentativi = document.getElementById('tentativi');
const numero = document.getElementById('numero');
const indovina = document.getElementById('indovina');
const nuovaPartita = document.getElementById('nuovaPartita');
const h2 = document.querySelector('h2'); // Seleziona il primo elemento <h2> della pagina.
const msg = document.getElementById('msg');

// Genera un numero casuale tra 1 e 100, che l'utente dovrà indovinare.
let numEstratto = Math.floor(Math.random() * 100) + 1;
console.log(numEstratto); // Stampa il numero estratto nella console (utile per debug).

// Inizializza il contatore dei tentativi a 1.
let numTentativi = 1;

// Assicura che i pulsanti e i campi di input siano abilitati all'inizio del gioco.
indovina.disabled = false;
tentativi.disabled = false;
numero.disabled = false;

// Aggiunge un event listener per il pulsante "Indovina", che verrà eseguito al click.
indovina.addEventListener('click', () => {
    // Converte il valore dell'input tentativi (stringa) in un numero intero.
    const maxTentativi = parseInt(tentativi.value, 10);

    // Controlla se i campi di input tentativi o numero sono vuoti.
    if (tentativi.value === "" || numero.value === "") {
        h2.innerHTML = 'Immetti dei valori (numero e tentativi)'; // Mostra un messaggio di errore.
        msg.innerHTML = ''; // Pulisce eventuali messaggi precedenti.
        return; // Interrompe l'esecuzione del resto del codice nel caso di input vuoti.
    }

    // Controlla se il numero di tentativi effettuati supera il numero massimo consentito.
    if (numTentativi > maxTentativi) {
        msg.innerHTML = 'Hai esaurito i tentativi. Il numero da indovinare era ' + numEstratto;
        numero.disabled = true; // Disabilita il campo numero.
        tentativi.disabled = true; // Disabilita il campo tentativi.
        indovina.disabled = true; // Disabilita il pulsante "Indovina".
        return; // Interrompe l'esecuzione del resto del codice poiché i tentativi sono esauriti.
    }

    // Converte il valore dell'input numero (stringa) in un numero intero.
    const numeroUtente = parseInt(numero.value, 10);

    // Se il numero inserito dall'utente è maggiore del numero estratto.
    if (numeroUtente > numEstratto) {
        msg.innerHTML = 'Tentativo ' + numTentativi + ' errato. Il numero da indovinare è più piccolo';
    } 
    // Se il numero inserito dall'utente è minore del numero estratto.
    else if (numeroUtente < numEstratto) {
        msg.innerHTML = 'Tentativo ' + numTentativi + ' errato. Il numero da indovinare è più grande';
    } 
    // Se l'utente ha indovinato il numero.
    else {
        h2.innerHTML = 'Hai indovinato in ' + numTentativi + ' tentativi il numero estratto era ' + numEstratto;
        numero.disabled = true; // Disabilita il campo numero.
        tentativi.disabled = true; // Disabilita il campo tentativi.
        indovina.disabled = true; // Disabilita il pulsante "Indovina".
        return; // Interrompe l'esecuzione del resto del codice poiché l'utente ha indovinato.
    }

    // Incrementa il contatore dei tentativi dopo ogni tentativo.
    numTentativi++;
});

// Aggiunge un event listener per il pulsante "Nuova partita", che verrà eseguito al click.
nuovaPartita.addEventListener('click', () => {
    // Genera un nuovo numero casuale tra 1 e 100.
    numEstratto = Math.floor(Math.random() * 100) + 1;
    console.log(numEstratto); // Stampa il nuovo numero estratto nella console (utile per debug).
    
    // Reimposta il contatore dei tentativi a 1.
    numTentativi = 1;
    
    // Pulisce il messaggio e i campi di input per iniziare una nuova partita.
    h2.innerHTML = ''; // Pulisce il messaggio di vittoria.
    numero.disabled = false; // Riabilita il campo numero.
    tentativi.disabled = false; // Riabilita il campo tentativi.
    msg.innerHTML = ''; // Pulisce il messaggio di errore.
    tentativi.value = ''; // Pulisce il campo tentativi.
    numero.value = ''; // Pulisce il campo numero.
    indovina.disabled = false; // Riabilita il pulsante "Indovina".
});
