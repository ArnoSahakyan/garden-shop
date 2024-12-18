import "./ErrorPage.scss"
import {Link} from "react-router-dom";

export default function Error_Page() {
    return (
        <div className="ErrorPage container">
            <img src="/404.png" alt="404 Error"/>
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found.
                Please go back to the homepage.</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
}