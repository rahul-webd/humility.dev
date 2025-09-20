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

    const { title, bannerImage, shortDescription } = data.fields
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
            className={`bg-white border w-full
                rounded-md shadow hover:-translate-y-3
                hover:shadow-xl cursor-pointer transition
                duration-300 grid grid-cols-1 md:grid-cols-3 px-4 py-6
                md:px-6 gap-y-4 md:gap-x-4 ${className}`}>
            <div
                className="border-2 border-neutral-300 rounded
                    overflow-hidden h-48 md:h-40">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={300}
                    width={400}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL='/work/placeholder.jpg' />
            </div>
            <div
                className="col-span-2 flex 
                    flex-col justify-center pl-0.5">
                <p
                    className="font-bold text-lg mb-4">
                    {title}
                </p>
                {
                    shortDescription
                        && (
                            <p
                                className="text-sm text-neutral-600">
                                {shortDescription}
                            </p>
                        )
                }
            </div>
        </div>
    )
}

export default Preview;