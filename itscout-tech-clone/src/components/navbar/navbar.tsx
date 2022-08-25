import Navlink from "./navlink";
import NavLogo from "./navlogo";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-deepblue text-white align-middle">
        in Whatsapp
        <ul>
          <Navlink title="home" destination="#" />
          <li>
            <Navlink title="what we do" destination="#" />
          </li>
          <li>
            <NavLogo />
          </li>
          <li>
            <Navlink title="blog" destination="#" />
          </li>
          <li>
            <Navlink title="contact us" destination="#" />
          </li>
        </ul>
      </div>
    </>
  );
}
