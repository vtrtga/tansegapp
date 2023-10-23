import React from 'react';

import classNames from "classnames";
import "./Menu.css"
interface MenuProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
}


function Menu({ children, className, isOpen }: MenuProps) {
    return(
        <div className={classNames({ "menuHidden": !isOpen }, className, { "menuOpen": isOpen }, "menu" )}>
            {children}
        </div>
    )
}

export default Menu; 