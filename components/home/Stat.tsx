export type StatProps = {
    title: string,
    count: number,
    className?: string
}

const Stat = ({
    title,
    count,
    className
}: StatProps) => {

    return (
        <div
            className={className}>
            <p>{count}</p>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Stat;