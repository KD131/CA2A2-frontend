
import NavItem from "./NavItem";
import PrivateNavItem from "./PrivateNavItem";
import NavLoginItem from "./NavLoginItem";

export default function NavBar() {

    return (
        <ul className="navBar">
            <NavItem to="/" text="Home" />
            <NavItem to="/wikipedia" text="Wikipedia" />
            <NavItem to="/dadjokes" text="Dad jokes" />
            <PrivateNavItem to="/funstuff" text="Fun stuff!" allowedRole="any" />
            <PrivateNavItem to="/user" text="User page" allowedRole="user" />
            <PrivateNavItem to="admin" text="Admin page" allowedRole="admin"  />
            <NavItem to="/about" text="About" />
            <NavLoginItem />
        </ul>
    );
}
