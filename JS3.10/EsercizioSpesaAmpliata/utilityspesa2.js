function aggiungiProdotto(listaSpesa) {
    let prodotto = prompt("Che cosa vuoi aggiungere alla lista della spesa?");
    if (prodotto) {
        listaSpesa.push(prodotto);
        console.log("Lista della spesa:", listaSpesa);
        alert("Prodotto aggiunto alla lista");
    }
}

function eliminaUltimoProdotto(listaSpesa) {
    if (listaSpesa.length > 0) {
        let prodottoRimosso = listaSpesa.pop();
        console.log("Prodotto rimosso:", prodottoRimosso);
        console.log("Lista della spesa:", listaSpesa);
        alert("Prodotto rimosso dalla lista");
    } else {
        alert("La lista è vuota, non c'è nulla da rimuovere.");
    }
}

function gestisciListaSpesa() {
    let listaSpesa = [];
    let scelta = "AGGIUNGI";

    while (scelta !== "ESCI") {
        scelta = prompt("Vuoi aggiungere o eliminare un prodotto? (AGGIUNGI/ELIMINA/ESCI)").toUpperCase();
        switch (scelta) {
            case "AGGIUNGI":
                aggiungiProdotto(listaSpesa);
                break;
            case "ELIMINA":
                eliminaUltimoProdotto(listaSpesa);
                break;
            case "ESCI":
                console.log("Lista finale della spesa:", listaSpesa);
                break;
            default:
                alert("Azione non valida. Per favore, scegli AGGIUNGI, ELIMINA o ESCI.");
        }
    }
}

// Chiamata alla funzione
gestisciListaSpesa();
