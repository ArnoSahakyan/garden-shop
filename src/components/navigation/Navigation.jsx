import './Navigation.scss'
import Logo from '../../assets/logo'
import BasketEmpty from '../../assets/BasketEmpty'
import {Link, NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="Nav">
            <nav className="container">
                <Link to="/"><Logo/></Link>
                <ul>
                    <li><NavLink to="">Main Page</NavLink></li>
                    <li><NavLink to="categories">Categories</NavLink></li>
                    <li><NavLink to="products">All products</NavLink></li>
                    <li><NavLink to="sales">All sales</NavLink></li>
                </ul>
                <a href=""><BasketEmpty/></a>
            </nav>
        </div>
    )
}

