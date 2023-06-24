import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
            {/*Link should work like href i think*/}
        </nav>
        <div><Link to="/map">Map</Link></div>
        <Outlet/>
    </>
    )
};