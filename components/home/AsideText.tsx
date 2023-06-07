import { ReactNode } from "react"

export type AsideTextProps = {
    children?: ReactNode,
    colors?: string,
    dimensions?: string,
    className?: string
}

const AsideText = ({
    children,
    colors = 'bg-green-600/50 text-green-900',
    dimensions = 'h-28 w-28 lg:h-32 lg:w-32',
    className = ''
}: AsideTextProps) => {

    return (
        <p
            className={`rounded-full flex justify-center items-center 
                text-center font-semibold ${dimensions} ${colors} ${className}`}>
            {children}
        </p>
    )
}

export default AsideText;