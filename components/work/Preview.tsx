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
    const imgSrc = `https:${bannerImage?.fields.file.url}` || srcDefault
    const imgAlt = bannerImage?.fields.title || altDefault

    const navPost = () => {
        const id = data.sys.id
        router.push(`/work/${id}`)
    }


    return (
        <div
            onClick={navPost}
            className={`bg-amber-100 border
                rounded-lg max-w-[320px]
                transition duration-1000
                shadow hover:shadow-xl
                cursor-pointer ${className}`}>
            <div
                className="relative max-h-[200px] max-w-[320px]
                    rounded-t-lg overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={200}
                    width={320}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL='/work/placeholder.jpg'
                    className="blur" />
                <div
                    className="absolute inset-x-0 inset-y-0">
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        height={200}
                        width={320}
                        objectFit="contain"
                        placeholder="blur"
                        blurDataURL='/work/placeholder.jpg' />
                </div>
            </div>
            <article
                className="px-4 pt-2 pb-4">
                <p
                    className="font-semibold">
                    {title}
                </p>
            </article>
        </div>
    )
}

export default Preview;