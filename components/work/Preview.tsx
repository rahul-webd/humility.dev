import { Entry } from "contentful"
import { PostModel } from "../posts/Post"
import Image from "next/image"
import { useRouter } from "next/router"

export type PreviewProps = {
    data: Entry<PostModel>
    className?: string
}

const srcDefault = '/work/placeholder.jpg'
const altDefault = 'default image showing a blurred gradient'

const Preview = ({ data, className = '' }: PreviewProps) => {
    const router = useRouter()

    const { title, bannerImage } = data.fields
    const imgUrl = bannerImage?.fields.file.url
    const imgSrc = imgUrl ? `https:${imgUrl}` : srcDefault
    const imgAlt = bannerImage?.fields.title || altDefault

    const navPost = () => {
        const id = data.sys.id
        router.push(`/work/${id}`)
    }


    return (
        <div
            onClick={navPost}
            className={`bg-amber-100 border
                rounded-xl max-w-[320px]
                transition duration-300
                shadow hover:-translate-y-3
                hover:shadow-xl cursor-pointer ${className}`}>
            <div
                className="relative overflow-hidden p-3">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={220}
                    width={296}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL='/work/placeholder.jpg'
                    className="rounded-xl" />
            </div>
            <article
                className="px-5 pt-1 pb-4">
                <p
                    className="font-bold text-lg">
                    {title}
                </p>
            </article>
        </div>
    )
}

export default Preview;