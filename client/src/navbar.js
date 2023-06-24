import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/map">Map</Link></li>
            
            </ul>
        </nav>
        <Outlet/>
    </>
    )
};