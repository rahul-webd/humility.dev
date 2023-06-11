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

    const imgSrc = `https:${bannerImage?.fields.file.url}`
    const imgAlt = bannerImage?.fields.title

    return (
        <div
            className={`px-4 py-4 md:px-8 md:py-8
                bg-amber-100 ${className}`}>
            <article
                className='max-w-3xl mx-auto'>
                {
                    imgSrc
                        && (
                            <div
                                className='mb-8'>
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    height={400}
                                    width={768}
                                    objectFit="contain"
                                    placeholder="blur"
                                    blurDataURL='/work/placeholder.jpg' />
                            </div>
                        )
                }
                <h2
                    className='font-semibold text-2xl mb-2'>
                    {title}
                </h2>
                <h6
                    className='mb-8 font-medium'>
                    {date.substring(0, 10)}
                </h6>
                <div>
                    {documentToReactComponents(description, options)}
                </div>
            </article>
        </div>
    )
}

export default Post;