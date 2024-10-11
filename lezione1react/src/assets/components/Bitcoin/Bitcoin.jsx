import { useEffect, useState } from "react"
import "./Bitcoin.css"
export default function Bitcoin(){

const [usd, setUsd] = useState("")
const [eur, setEur] = useState("")
const [gbp, setGbp] = useState("")

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // Fetch dell'api

            .then((response) => response.json()) // Gestisco la risposta
        
            .then((data) => { // Ritorno i dati
                console.log(data)
                setUsd(data.bpi.USD.rate)
                setEur(data.bpi.EUR.rate)
                setGbp(data.bpi.GBP.rate)
            })

            .catch((error) => { // Gestisco eventuali errori
                console.error(error);
            })

            .finally(() => { // Eseguo azioni alla fine di tutto

            })
    }, []);

    return(
        <div className="bitcoin">
            <div className="inner">
                <div className="value usd">
                    <h2> {usd}$</h2>
                    <span>USD</span>
                </div>
                <div className="value euro">
                <h2>{eur}€</h2>
                <span>Euro</span>
                </div>
                <div className="value gbp">
                <h2>{gbp}£</h2>
                <span>GBP</span>
                </div>
            </div>
        </div>
    )
}