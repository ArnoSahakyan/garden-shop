
import './Navigation.css'

import Logo from '../../assets/logo'
import BasketEmpty from '../../assets/BasketEmpty'

export default function Navigation(){
  return(
    <div className="Nav">
      <nav className="container">
        <a href=""><Logo /></a>
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

