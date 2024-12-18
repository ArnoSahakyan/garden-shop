import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation.jsx";

export default function Layout() {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
