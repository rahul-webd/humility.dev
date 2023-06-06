export type CopyrightProps = {
    className?: string
}

const Copyright = ({
    className = ''
}: CopyrightProps) => {

    return (
        <section
            className={`font-semibold text-center ${className}`}>
            <p>
                ©️ 2022-2023 humility.dev
            </p>
        </section>
    )
}

export default Copyright;