import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface H1Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const H1 = ({
    children,
    className = '',
    ...rest
}: H1Props) => {

    return (
        <h1
            {...rest}
            className={`text-7xl md:text-8xl font-parisienne font-semibold 
                text-green-900 -rotate-[10deg] ${className}`}>
            {children}
        </h1>
    )
}

export default H1;