import usePosts from "../../hooks/posts/usePosts"
import ScrollObserver from "../observers/ScrollObserver"
import Loading from "../utils/Loading"
import Preview from "./Preview"

export type PostsProps = {
    contentType: string,
    type: string,
    className?: string
}

const Posts = ({ 
    contentType, 
    type,
    className = ''
}: PostsProps) => {
    const { sConfig, next } = usePosts(contentType, type)
    
    return (
        <section
            className={`px-4 md:px-8 max-w-6xl mx-auto
                pt-4 md:pt-8 ${className}`}>
            <ScrollObserver
                action={next}
                className='flex flex-col items-center'>
                {
                    sConfig.posts.map((post, i) => {

                        return (
                            <Preview
                                key={i}
                                post={post} />
                        )
                    })
                }
            </ScrollObserver>
            <Loading
                loading={sConfig.loading} />
        </section>
    )
}

export default Posts;