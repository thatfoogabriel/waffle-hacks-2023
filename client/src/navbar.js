import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
    <>
        <nav>
            <Link to="/"><img src="images/WaffleEar.png" alt="" /></Link>
            <Link to="/signin">Sign in</Link>
        </nav>
        <Outlet/>
    </>
    )
};