import './Navigation.scss'

import Logo from '../../assets/logo'
import BasketEmpty from '../../assets/BasketEmpty'
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="Nav">
            <nav className="container">
                <Link to="/"><Logo/></Link>
                <ul>
                    <li><Link to="" className="nav-link">Main Page</Link></li>
                    <li><Link to="" className="nav-link">Categories</Link></li>
                    <li><Link to="" className="nav-link">All products</Link></li>
                    <li><Link to="" className="nav-link">All sales</Link></li>
                </ul>
                <a href=""><BasketEmpty/></a>
            </nav>
        </div>
    )
}

