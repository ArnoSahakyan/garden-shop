import './Navigation.scss'

import Logo from '../../assets/logo'
import BasketEmpty from '../../assets/BasketEmpty'
import {Link} from "react-router-dom";

export default function Navigation(){
  return(
    <div className="Nav">
      <nav className="container">
        <Link to="/"><Logo /></Link>
          <ul>
            <li><a href="" className="nav-link">Main Page</a></li>
            <li><a href="" className="nav-link">Categories</a></li>
            <li><a href="" className="nav-link">All products</a></li>
            <li><a href="" className="nav-link">All sales</a></li>
          </ul>
          <a href=""><BasketEmpty/></a>
      </nav>
    </div>
  )
}

