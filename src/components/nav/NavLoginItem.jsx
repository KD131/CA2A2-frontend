import { NavLink } from "react-router-dom";
import { userContext } from "../../auth/authContexts";

export default function NavLoginItem() {
    function isActive({ isActive }) {
        return isActive ? "activeNavItem" : "";
    }

    return (
        <userContext.Consumer>{user => (
            <div className="navLoginItem">
                {user ? <div>
                    <li><span className="userInfo">{user.username}</span> <span className="badge bg-primary rounded-pill">{user.roles.join(", ")}</span></li>
                    <li><NavLink onClick={()=> console.log("test")}>Sign out</NavLink></li>
                </div>
                    : <li><NavLink className={isActive} to="/login">Sign in</NavLink></li>
                }
            </div>)}</userContext.Consumer>
    );
}