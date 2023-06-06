import Image, { StaticImageData } from "next/image"

export type CompanyProps = {
    img: StaticImageData,
    title: string,
    link: string,
    className?: string
}

const Company = ({
    img,
    title,
    link,
    className
}: CompanyProps) => {

    const openLink = () => {
        window.open(link, '_blank')
    }

    return (
        <button
            onClick={openLink}
            className={className}>
            <Image
                src={img}
                height={40}
                width={40}
                alt={title} />
        </button>
    )
}

export default Company;