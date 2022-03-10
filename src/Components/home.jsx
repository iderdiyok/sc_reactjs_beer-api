import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 my-5">
                    <Link to="/allbeers">
                    <div className="rounded shadow mb-5">
                        <img src="./img/first.png" alt="All Beers" className="rounded-top w-100"/>
                        <h3 className="w-100 py-3 ps-3 fs-2 fw-bold bg-warning text-light">All Beers</h3>
                        <h4 className="px-2 py-5 fw-bold text-dark">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi earum consequatur facilis dolores unde rerum tempora.
                        </h4>
                    </div>
                    </Link>
                    <Link to="/random">
                    <div className="rounded shadow">
                        <img src="./img/second.png" alt="Random Beer" className="rounded-top w-100"/>
                        <h3 className="w-100 py-3 ps-3 fs-2 fw-bold bg-warning text-light">Random Beer</h3>
                        <h4 className="px-2 py-5 fw-bold text-dark">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi earum consequatur facilis dolores unde rerum tempora.
                        </h4>
                    </div>
                    </Link> 
                </div>
            </div>
        </div> 
        
    )
}