import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface P1Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const P1 = ({
    children,
    className = '',
    ...rest
}: P1Props) => {

    return (
        <p
            {...rest}
            className={`font-semibold text-3xl ${className}`}>
            {children}
        </p>
    )
}

export default P1;