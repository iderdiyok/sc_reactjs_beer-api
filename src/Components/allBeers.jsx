import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

export default function AllBeers(){
    const[allbeers, setAllbeers] = useState([]);

    useEffect(() =>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setAllbeers(json)
        })
      }, []);

      return(
        <div className="container">
            <div className="row justify-content-center p-3 mb-5">
                <Navigation />
                <div className="col-sm-12 col-md-8">
                    { allbeers.map((ele, i) =>{
                        return(
                        <div key={i} className="row d-flex align-content-around border-bottom border-2 py-4">
                            <div className="col-4">
                                <div class="col col-md-6 mx-auto">
                                    <img src={ele.image_url} alt={ele.name} className="w-100"/>
                                </div>
                            </div>
                            <div className="col-8 mt-5">
                                <div className="card-body">
                                    <h1 className="card-title fw-bold">{ele.name}</h1>
                                    <h3 className="card-text text-warning">{ele.tagline}</h3>
                                    <h4 className="card-text mb-4">Created by: {ele.name}</h4>
                                    <Link className="bg-warning py-2 px-4 fw-bold fs-3 rounded-pill text-decoration-none text-light" key={i} to={`/details/${ele._id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
      )
}