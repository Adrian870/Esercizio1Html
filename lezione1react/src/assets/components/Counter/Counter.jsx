import { useEffect, useState } from 'react'
import './Counter.css'


export default function Counter() {
 
    const [count, setCount] = useState(0)
    const[showPopup, setShowPopup] = useState(false)

    const add = () => {
        setCount(count + 1)
    }

    const min = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    useEffect(() => {
       if (count < 0) {
        setCount(0)
        setShowPopup(true)
    }
    if (count > 0 ){setShowPopup(false)}
},[count])



return (
    <div className="counter">
            <div className="conto">

            <h1>{count}</h1>
           
            <div className="btns">
                <button onClick={() => add()}>+</button>
                <button onClick={() => min()}>-</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
            {showPopup && (
                
                <div className="popup">
                    <h3>Errore</h3>
                    <p>Non puoi andare sotto lo 0</p>
                    </div>

)}
               </div>





<div className="card2">

       
<div className="head2">

<div className="title2">
    <h3>ciao</h3>
</div>
<div className="icon2">
    <h2>X</h2>
</div>
<div className="mainInfo2">
<h2>Pippo</h2>
</div>
<div className="description2">
<p>
        
    Vicari
</p>
</div>
</div>
</div>
</div>
)}


