import { useEffect, useState } from "react";
import "./Access.css"
import { CgProfile } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdEmail } from "react-icons/md";


export default function Access(){
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [lName, setLname] = useState("")
    const [icon, setIcon] = useState("")
    const [username, setUsername] = useState([])
    const [registration, setRegistration] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        fetch('https://randomuser.me/api/') // Fetch dell'api

            .then((response) => response.json()) // Gestisco la risposta
        
            .then((data) => { // Ritorno i dati
                console.log(data.results[0])
                setTitle(data.results[0].name.title)
                setName(data.results[0].name.first)
                setLname(data.results[0].name.last)
                setIcon(data.results[0].picture.large)
                setUsername(data.results[0].login.username)
                setRegistration(data.results[0].registered.date)
                setAge(data.results[0].dob.age)
                setCountry(data.results[0].location.country)
                setEmail(data.results[0].email)
            })

            .catch((error) => { // Gestisco eventuali errori
                console.error(error);
            })

            .finally(() => { // Eseguo azioni alla fine di tutto

            })
    }, []);
    



    return(



<div className="si">
    <div className="foto">
            <img src={icon} alt="Foto" />
    </div>
    
        <div className="info">
            <h1>{title} {name} {lName} </h1>
            
        </div>

        <div id="interazioni">
            <h2 className="riquadri">Followers <span>1000</span></h2>
            <h2 className="riquadri">Following <span>921</span></h2>
            <h2 className="riquadri">Request <span> 20</span></h2>

        </div>

            <div className="credenziali">

<div className="User">
<hr></hr>
            <CgProfile 
            />
</div>
            <h2>
           {username}
            </h2>
            <hr></hr>
<div>

            <FaRegAddressCard />
            <h2>
            Joined on {registration}
            </h2>
            <hr></hr>
</div>
<div>

            <FaBirthdayCake />
            <h2>
            {age} Years
            </h2>
            <hr></hr>
</div>
<div>
            <BiWorld></BiWorld> 
            <h2>
            {country}
            </h2>
            <hr></hr>
</div>
<div>

        <MdEmail/>
    <h2>
        {email}
    </h2>
    <hr></hr>
</div>

<div>
<button onClick={() => window.location.reload(false)}>Clicca qui per cambiare account</button>
</div>
            
            </div>
        </div>
    )
    }