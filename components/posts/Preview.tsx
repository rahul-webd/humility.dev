export type Preview = {
    title: string,
    date: string
}

const Preview = ({ preview, className }: {
    preview: Preview,
    className?: string,
}) => {

    return (
        <section
            className={`flex items-center justify-between 
                w-full ${className}`}>
            <p>
                { preview.title }
            </p>
            <p>
                { preview.date }
            </p>
        </section>
    )
}

export default Preview