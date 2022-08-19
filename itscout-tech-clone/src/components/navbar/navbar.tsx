import Navlink from "./navlink";
import NavLogo from "./navlogo";

export default function Navbar() {
    return (
        <>
    <div className="bg-deepblue flex text-white align-middle">
        <p>in Whatsapp </p>
        <div className="snap-center">
            <ul>
                <Navlink title='home' destination='#' />
            <li>
                <Navlink title='what we do' destination='#' />
            </li>
            <li>
                <NavLogo />
            </li>
            <li>
                <Navlink title='blog' destination='#' />
            </li>
            <li>
                <Navlink title='contact us' destination='#' />
            </li>
            </ul>
       </div>
    </div>
        </>
    )
}