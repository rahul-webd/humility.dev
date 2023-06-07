export type LogoProps = {
    className?: string
}

const Logo = ({
    className = ''
}: LogoProps) => {

    return (
        <div
            className={className}>
            <p className="font-medium text-lg">
                hum<span className="text-green-900 mx-px text-base">{'</>'}</span>ty
            </p>
            <div
                className="h-0.5 w-4 bg-green-600">
            </div>
        </div>
    )
}

export default Logo;