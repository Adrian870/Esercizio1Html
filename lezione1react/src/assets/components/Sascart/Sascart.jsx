import React, { useState } from 'react';

const GiocoSassoCartaForbici = () => {
  const [sceltaGiocatore, setSceltaGiocatore] = useState('');
  const [sceltaComputer, setSceltaComputer] = useState('');
  const [risultato, setRisultato] = useState('');

  const opzioni = ['Sasso', 'Carta', 'Forbici'];

  const gioca = (scelta) => {
    setSceltaGiocatore(scelta);
    const sceltaComp = opzioni[Math.floor(Math.random() * opzioni.length)];
    setSceltaComputer(sceltaComp);
    determinaVincitore(scelta, sceltaComp);

    
  };

  const determinaVincitore = (giocatore, computer) => {
    if (giocatore === computer) {
      setRisultato('Pareggio!');
    } else if (
      (giocatore === 'Sasso' && computer === 'Forbici') ||
      (giocatore === 'Carta' && computer === 'Sasso') ||
      (giocatore === 'Forbici' && computer === 'Carta')
    ) {
      setRisultato('Hai vinto!');
    } else {
      setRisultato('Hai perso!');
    }
  };

  return (
    <div>
      <h1>Gioco Sasso, Carta, Forbici</h1>
      <div>
        {opzioni.map((opzione) => (
          <button key={opzione} onClick={() => gioca(opzione)}>
            {opzione}
          </button>
        ))}
      </div>
      <div>
        <p>Scelta del giocatore: {sceltaGiocatore}</p>
        <p>Scelta del computer: {sceltaComputer}</p>
        <p>Risultato: {risultato}</p>
      </div>
    </div>
  );
};

export default GiocoSassoCartaForbici;
