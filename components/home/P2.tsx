import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface P2Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const P2 = ({
    children,
    ...rest
}: P2Props) => {

    return (
        <p
            {...rest}>
            {children}
        </p>
    )
}

export default P2;