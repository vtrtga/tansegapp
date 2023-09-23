import { ButtonProps } from "./ButtonTypes";
import classNames from 'classnames'

function Button({ className, onClick, styles }: ButtonProps) {
    return (
        <button 
        className={classNames(className, styles.backgroundColor)} 
        onClick={onClick}
        />
    )
}

export default Button;