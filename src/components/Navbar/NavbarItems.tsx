import classNames from "classnames";
import { NavbarItensProps } from "./NavbarTypes";

function NavbarItems({ className, items }: NavbarItensProps) {
    return (
        <div className="nav-list h-full">
            <ul className="list-none nav-list inline-block">
                {items.map((item, i) => (
                    <li key={i} className={classNames(className, "nav-items block")}>
                        <a className="item-link" href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarItems;