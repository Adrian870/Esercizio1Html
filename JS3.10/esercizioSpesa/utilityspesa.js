function gestisciListaSpesa() {
    let listaSpesa = [];
    let aggiungiProdotto = "SI";

    while (aggiungiProdotto !== "NO" && aggiungiProdotto !== "ESCI") {
        let prodotto = prompt("Che cosa vuoi aggiungere alla lista della spesa?");
        if (prodotto) {
            listaSpesa.push(prodotto);
            console.log("Lista della spesa:", listaSpesa);
            alert("Prodotto aggiunto alla lista");
        }
        aggiungiProdotto = prompt("Vuoi aggiungere altri prodotti? (SI/NO/ESCI)");
    }

    console.log("Lista finale della spesa:", listaSpesa);
}

// Chiamata alla funzione
gestisciListaSpesa();
