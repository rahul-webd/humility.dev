import usePosts, { PostPreview } from "../../hooks/posts/usePosts"
import ScrollObserver from "../observers/ScrollObserver"
import Preview from "./Preview"

export type PostsProps = {
    contentType: string,
    className?: string
}

const Posts = ({ 
    contentType, 
    className 
}: PostsProps) => {
    const { sConfig, next } = usePosts(contentType)
    
    return (
        <section
            className={className}>
            <ScrollObserver
                action={next}
                className='flex flex-col items-center'>
                {
                    sConfig.posts.map(({ fields }, i) => {

                        return (
                            <Preview
                                key={i}
                                preview={{
                                    title: (fields as PostPreview).title,
                                    date: (fields as PostPreview).date.substring(0, 10)
                                }}
                                className='mb-2 md:mb-4' />
                        )
                    })
                }
            </ScrollObserver>
        </section>
    )
}

export default Posts;