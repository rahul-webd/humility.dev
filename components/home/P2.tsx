import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface P2Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const P2 = ({
    children,
    className = '',
    ...rest
}: P2Props) => {

    return (
        <p
            {...rest}
            className={`text-green-900 font-medium ${className}`}>
            {children}
        </p>
    )
}

export default P2;