import classNames from "classnames";
import { NavbarItensProps } from "./NavbarTypes";
import { ChevronRightIcon } from "@radix-ui/react-icons";


function NavbarItems({ className, items, onClick }: NavbarItensProps) {
    return (
        <div className="menu-list">
            <ul className="nav-list">
                {items.map((item, i) => (
                    <li key={i} className={classNames(className, "nav-item")}>
                        <a className="item-link" onClick={onClick} href={item.url}>
                                <ChevronRightIcon className="menu-icons"/>
                            <p className="item-title">
                                {item.title}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarItems;