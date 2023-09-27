import classNames from 'classnames';
import NavbarWave from '../../images/NavbarWave';
import styles from "./NavbarClasses"
import { NavbarProps } from './NavbarTypes';
import NavbarItems from './NavbarItems';

function Navbar({ className, items }: NavbarProps) {
    return(
        <div 
        className={classNames(className, styles.parentDiv, styles.backgroundColor)} >
            <NavbarWave className={styles} />
            <NavbarItems>
                {items}
            </NavbarItems>
        </div>
    )
}

export default Navbar;