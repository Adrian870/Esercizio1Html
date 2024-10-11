import { useEffect, useState } from "react";
import "./Uni.css"

export default function Uni(){

    const [uniData, setUni] = useState([])


    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=United+States') // Fetch dell'api

            .then((response) => response.json()) // Gestisco la risposta
        
            .then((data) => { // Ritorno i dati
                console.log(data)
                setUni(data)
                
            })

            .catch((error) => { // Gestisco eventuali errori
                console.error(error);
            })

            .finally(() => { // Eseguo azioni alla fine di tutto

            })
    }, []);
    



    return(

        <div className="uni">
        <table>
            <thead>
                <th>Nome Università</th>
                <th>Codice</th>
                <th>Paese</th>
                <th>Collegamento</th>
            </thead>
            <tbody>
                {uniData.map((el) => (
                    <tr key={el.name}>
                        <td> {el.name} </td>
                        <td> {el.alpha_two_code} </td>
                        <td> {el.country} </td>
                        <td><a href={el.web_pages} >{el.web_pages}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    )
}