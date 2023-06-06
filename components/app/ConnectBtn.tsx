import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, cloneElement } from "react"

export interface ConnectBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: ReactElement,
}

const ConnectBtn = ({
    icon,
    className = '',
    ...rest
}: ConnectBtnProps) => {

    return (
        <button
            className={`bg-amber-400 text-black
                rounded-full h-20 w-20 md:h-40 md:w-40 flex
                justify-center items-center ${className}`}
            {...rest}>
            {
                cloneElement(icon, {
                    className: 'h-8 w-8 md:h-16 md:w-16'
                })
            }
        </button>
    )
}

export default ConnectBtn;