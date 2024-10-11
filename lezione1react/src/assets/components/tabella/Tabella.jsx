import "./Tabella.css"
import { useState, useEffect } from "react";

export default function Popusa(){
    
    const [usaData, setUsaData] = useState([])


    useEffect(() => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population') // Fetch dell'api

            .then((response) => response.json()) // Gestisco la risposta
        
            .then((data) => { // Ritorno i dati
                console.log(data.data)
                setUsaData(data.data)
                
            })

            .catch((error) => { // Gestisco eventuali errori
                console.error(error);
            })

            .finally(() => { // Eseguo azioni alla fine di tutto

            })
    }, []);
    
    
    return(

        <div className="usa">
            <table>
                <thead>
                    <th>Anno</th>
                    <th>Popolazione</th>
                </thead>
                <tbody>
                    {usaData.map((el) => (
                        <tr key={el.Year}>

                            <td> {el.Year} </td>
                            <td> {el.Population} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )




}