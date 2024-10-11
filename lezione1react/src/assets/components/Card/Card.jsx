import "./Card.css"

export default function Card ({title, icon, mainInfo, description}) {

    return(
        <div className="card">

       
            <div className="head">

            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="icon">
                {icon}
            </div>
        </div>
        <div className="mainInfo">
            <h2>{mainInfo}</h2>
        </div>
        <div className="description">
            <p>
                {description}
            </p>
        </div>
        </div>
    )
}