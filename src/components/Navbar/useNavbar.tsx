import { useMemo } from "react";
import { useNavBarProps } from "./NavbarTypes";

function useNavbar({ items, classNames }: useNavBarProps) {
    const buildNavItems = useMemo(() => {
        return (
            <ul>
                {items.map((item, i) => (
                    <li key={i} className={classNames}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        )
    }, [items, classNames])

    return {
        buildNavItems,
    }
}

export default useNavbar;