import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";

export const Navigation = () => {
    const isLoggedIn = useAuth()

    return <nav >
        <NavLink style={{marginRight:50}} to = "/">
            Home
        </NavLink>
        {isLoggedIn.isLoggedIn && (
        <NavLink to = "/contacts">
            Contacts
        </NavLink>
        )}
    </nav>
}