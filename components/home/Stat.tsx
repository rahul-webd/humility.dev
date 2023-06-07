export type StatProps = {
    title: string,
    count: number,
    className?: string
}

const Stat = ({
    title,
    count,
    className = ''
}: StatProps) => {

    return (
        <div
            className={`w-32 md:w-32 ${className}`}>
            <p
                className="font-extrabold text-5xl
                    md:text-6xl mb-4 text-sky-600">
                {count}
            </p>
            <p
                className="text-xl font-bold">
                {title}
            </p>
        </div>
    )
}

export default Stat;