import { Entry } from "contentful"
import { useRouter } from "next/router"
import { PostModel } from "./Post"

type PreviewProps = {
    post: Entry<PostModel>,
    className?: string,
}

const Preview = ({ post, className }: PreviewProps) => {
    const router = useRouter()

    const navPost = () => {
        const id = post.sys.id
        router.push(`/blog/${id}`)
    }

    const { title, date } = post.fields

    return (
        <button
            onClick={navPost}
            className={`flex items-center justify-between 
                w-full font-semibold border-t text-start
                border-amber-900 p-4 first:border-t-0 
                hover:translate-x-8 transition duration-300 
                ${className}`}>
            <p
                className="w-60 md:w-max mr-4">
                { title }
            </p>
            <p
                className="whitespace-nowrap">
                { date.slice(0, 10) }
            </p>
        </button>
    )
}

export default Preview