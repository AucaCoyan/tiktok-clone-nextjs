import Navlink from "./navlink";
import NavLogo from "./navlogo";

export default function Navbar() {
    return (
        <>
        <p>in Whatsapp </p>
        <p className="text-green-700">this is a navbar</p>
        <Navlink title='home' destination='#' />
        <Navlink title='what we do' destination='#' />
        <NavLogo />
        <Navlink title='blog' destination='#' />
        <Navlink title='contact us' destination='#' />
        </>
    )
}