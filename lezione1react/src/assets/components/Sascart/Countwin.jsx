import GiocoSassoCartaFo from './assets/components/Sascart/Sascart'
import { useEffect, useState } from 'react'

export default function Countwin() {
 
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const add2 = () => {
        setCount2(count2 + 1)
    }


    const reset = () => {
        setCount(0)
        setCount2(0)
    }


return (

    <div className="counter">
            <div className="conto">
                if (risultato == "") {
                    
                }
            <button onClick={() => add()}>+</button>
            <h1>{count}</h1>
    </div>
    </div>

)}