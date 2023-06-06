import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface P1Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const P1 = ({
    children,
    ...rest
}: P1Props) => {

    return (
        <p
            {...rest}>
            {children}
        </p>
    )
}

export default P1;