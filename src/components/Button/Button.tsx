import { ButtonProps } from "./ButtonTypes";
import classNames from 'classnames'

function Button({ className, onClick, children }: ButtonProps) {
    return (
        <button
            className={classNames(
                className,
                )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;