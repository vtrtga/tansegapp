
import "./Navbar.css";
import classNames from 'classnames';
import { navbarStyles } from "./NavbarClasses"
import { NavbarProps } from './NavbarTypes';
import HamburguerMenu from "./HamburguerMenu";

function Navbar({ className }: NavbarProps) {
    const { backgroundImage } = navbarStyles;
    return(
        <nav 
        className={classNames(className, backgroundImage)} >
            <HamburguerMenu />
        </nav>
    )
}

export default Navbar;