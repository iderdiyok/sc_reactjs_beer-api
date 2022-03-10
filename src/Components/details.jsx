import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Navigation from "./navigation"

export default function Details(){
    let apiId = useParams("_id")
    const [beer, setBeer] = useState([])

    useEffect( ()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
        .then(response => response.json())
        .then(
            json =>{
                console.log(json);
                setBeer(json)
            }
        )
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 justify-content-center m-auto">
                    <div className="card rounded border-0">
                        <div className="card-body p-4">
                            <img src={beer.image_url} alt={beer.name} width={"20%"} className="img-fluid d-block mx-auto mb-3"/>
                            <div className="col mt-5">
                                <h1 className="fw-bold">{beer.name}</h1>
                                <h3 className="fw-bold text-warning">{beer.tagline}</h3>
                                <p className="d-flex justify-content-between lead mt-5 mb-0">
                                    <small>First brewed:</small>
                                    <small>{beer.first_brewed}</small>
                                </p>
                                <p className="d-flex justify-content-between lead mt-n5">
                                    <small>Attenuation level:</small>
                                    <small>{beer.attenuation_level}</small>
                                </p>
                                <p className="fw-bold">{beer.description}</p>

                                <Link to="/allbeers"><i className="fa-solid fa-arrow-left p-3 text-light fs-5 fw-bold rounded-circle bg-warning"></i></Link>
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
            <Navigation />
        </div>
    )
}