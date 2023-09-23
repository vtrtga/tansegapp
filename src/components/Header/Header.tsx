import classNames from 'classnames';
import HeaderWave from '../../images/HeaderWave';
import styles from "./headerClasses"

function Header() {
    return(
        <div className={classNames(styles.parentDiv, styles.backgroundColor)} >
            <HeaderWave className={styles} />
        </div>
    )
}

export default Header;