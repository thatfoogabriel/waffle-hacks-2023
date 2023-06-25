import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        <div><Link to="/map">Map</Link></div>
        <Outlet/>
    </>
    )
};