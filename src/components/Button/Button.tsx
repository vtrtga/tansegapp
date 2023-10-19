import { ButtonProps } from "./ButtonTypes";
import classNames from 'classnames'

function Button({ className, onClick, backgroundImage, children }: ButtonProps) {
    console.log(backgroundImage)
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