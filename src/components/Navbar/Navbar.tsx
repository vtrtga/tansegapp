import "./Navbar.css";
import classNames from 'classnames';
import { NavbarProps } from './NavbarTypes';
import HamburguerMenu from "./HamburguerMenu";

function Navbar({ className }: NavbarProps) {
    return(
        <nav
        className={classNames(className, "navbar")} >
            <HamburguerMenu />
        </nav>
    )
}

export default Navbar;