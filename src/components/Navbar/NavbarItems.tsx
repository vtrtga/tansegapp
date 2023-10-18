import classNames from "classnames";
import { NavbarItensProps } from "./NavbarTypes";

function NavbarItems({ className, items }: NavbarItensProps) {
    return (
        <div className="menu-list">
            <ul className="nav-list inline-block">
                {items.map((item, i) => (
                    <li key={i} className={classNames(className, "nav-item")}>
                        <a className="item-link" href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarItems;