import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface H1Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const H1 = ({
    children,
    ...rest
}: H1Props) => {

    return (
        <h1
            {...rest}>
            {children}
        </h1>
    )
}

export default H1;