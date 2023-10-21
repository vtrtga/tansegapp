import classNames from "classnames";

interface MenuProps {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
}

function Menu({ children, className, isOpen }: MenuProps) {
    return(
        <div className={classNames({ "menuHidden": !isOpen }, className, { "menuOpen": isOpen } )}>
            {children}
        </div>
    )
}

export default Menu; 