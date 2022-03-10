import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Random(){
    const [random, setRandom] = useState([])

    useEffect( ()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(
            json =>{
                console.log(json);
                setRandom(json)
            }
        )
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 justify-content-center m-auto">
                    <div className="card rounded border-0">
                        <div className="card-body p-4">
                            <img src={random.image_url} alt={random.name} width={"20%"} className="img-fluid d-block mx-auto mb-3"/>
                            <div className="col mt-5">
                                <h1 className="fw-bold">{random.name}</h1>
                                <h3 className="fw-bold text-warning">{random.tagline}</h3>
                                <p className="d-flex justify-content-between lead mt-5 mb-0">
                                    <small>First brewed:</small>
                                    <small>{random.first_brewed}</small>
                                </p>
                                <p className="d-flex justify-content-between lead mt-n5">
                                    <small>Attenuation level:</small>
                                    <small>{random.attenuation_level}</small>
                                </p>
                                <p className="fw-bold">{random.description}</p>

                                <Link to="/"><i className="fa-solid fa-arrow-left p-3 text-light fs-5 fw-bold rounded-circle bg-warning"></i></Link>
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
    )
}