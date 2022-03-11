import { Link } from "react-router-dom";
import beer_logo from "../beer_logo.png"

export default function Navigation(){
    return(
      <nav class="navbar fixed-bottom navbar-expand-sm bg-warning">
        <div class="container-fluid d-flex justify-content-center text-center">
          <Link to="/" ><img src={beer_logo} alt="logo" width={"15%"} className="navbar-brand rounded-circle bg-light p-2 logo"/></Link>
        </div>
      </nav>
    )
}

