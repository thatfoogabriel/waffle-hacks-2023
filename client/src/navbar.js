import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
        </nav>
        <div><Link to="/map">Map</Link></div>
        <Outlet/>
    </>
    )
};