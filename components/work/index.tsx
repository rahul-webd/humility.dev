import usePosts from "../../hooks/posts/usePosts";
import ScrollObserver from "../observers/ScrollObserver";
import Loading from "../utils/Loading";
import Preview from "./Preview";

export type PostsProps = {
    contentType: string,
    type: string,
    className?: string
}

const Work = ({ contentType, type, className = '' }: PostsProps) => {
    const { sConfig, next } = usePosts(contentType, type)

    return (
        <section
            className={`px-4 md:px-8 mx-auto
                pt-4 md:pt-8 flex flex-col items-center 
                ${className}`}>
            <ScrollObserver
                action={next}
                className='flex flex-wrap justify-center'>
                {
                    sConfig.posts.map((post, i) => {

                        return (
                            <Preview
                                key={i}
                                data={post}
                                className="m-4" />
                        )
                    })
                }
            </ScrollObserver>
            <Loading
                loading={sConfig.loading} />
        </section>
    )
}

export default Work;