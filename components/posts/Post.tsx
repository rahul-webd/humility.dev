import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../app/App'
import { Asset, Entry } from 'contentful'
import Loading from '../utils/Loading'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Image from 'next/image'

export type PostType =
    | 'devPost' 
    | 'blogPost' 
    | 'workPost'

export type PostModel = {
    bannerImage?: Asset,
    date: string,
    title: string,
    shortDescription: string
    description: any
}

type PostProps = {
    id: string,
    className?: string
}

function Post ({ id, className = '' }: PostProps) {
    const [post, setPost] = useState<Entry<PostModel>>()
    const [loading, setLoading] = useState<boolean>(false)
    const appContext = useContext(AppContext)

    useEffect(() => {
        if (!id || !appContext) return;

        const { cfClient } = appContext;

        const handlePost = async () => {
            setLoading(true)
            const entry = await cfClient.getEntry<PostModel>(id)
            setPost(entry)
            setLoading(false)
        }

        handlePost()
    }, [id, appContext])

    if (loading) {
        return (
            <Loading
                loading={loading} />
        )
    }

    if (!post) {
        return null;
    }

    const options: Options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {

                return (
                    <p
                        className='mb-4 font-medium'>
                        {children}
                    </p>
                )
            },
            [INLINES.HYPERLINK]: (node, children) => {

                return (
                    <a
                        href={node.data.uri} target='_blank'
                        rel='noreferrer'
                        className='text-sky-700 font-medium underline
                            hover:text-sky-900'>
                        {children}
                    </a>
                )
            },
            [BLOCKS.UL_LIST]: (node, children) => {

                return (
                    <ul
                        className='list-disc font-medium my-8
                            ml-4'>
                        {children}
                    </ul>
                )
            }
        }
    }

    const { title, date, description, bannerImage } = post.fields

    const imgUrl = bannerImage?.fields.file.url
    const imgSrc = imgUrl && `https:${imgUrl}`
    const imgAlt = bannerImage?.fields.title

    return (
        <div
            className={`p-2 md:p-8 bg-amber-100 ${className}`}>
            <article
                className='max-w-3xl mx-auto bg-white
                    p-4 md:p-8'>
                {
                    imgSrc
                        && (
                            <div
                                className='mb-8 w-full'>
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    height={400}
                                    width={768}
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL='/work/placeholder.jpg' />
                            </div>
                        )
                }
                <div>
                    <h2
                        className='font-semibold text-2xl mb-2'>
                        {title}
                    </h2>
                    <h6
                        className='mb-8 font-medium'>
                        {date.substring(0, 10)}
                    </h6>
                    <div
                        className='whitespace-pre-wrap'>
                        {documentToReactComponents(description, options)}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Post;