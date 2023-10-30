import "./Navbar.scss";
import classNames from 'classnames';
import { NavbarProps } from './NavbarTypes';
import HamburguerMenu from "./HamburguerMenu";
import Logo from "@/images/logo.png";
import Image from "next/image";

function Navbar({ className }: NavbarProps) {
    return (
        <nav
            className={classNames(className, "navbar")} >
                <div>

            <p className="logo-container">
                <Image src={Logo} className="logo" alt="logo" />
            </p>
                </div>
            <HamburguerMenu />
        </nav>
    )
}

export default Navbar;