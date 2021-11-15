import { NavLink } from "react-router-dom";
import { userContext } from "../../auth/authContexts";
export default function PrivateNavItem({ to, text, allowedRole }) {
    function isActive({ isActive }) {
        return isActive ? "active" : "";
    }

    function isAllowed(user) {
        return user && (user.roles.includes(allowedRole) || allowedRole === "any");
    }

    return (
        <userContext.Consumer>
            {user => (isAllowed(user) && <li>
                <NavLink
                    className={isActive}
                    to={to} end>{text}</NavLink>
            </li>)}
        </userContext.Consumer>
    );
}