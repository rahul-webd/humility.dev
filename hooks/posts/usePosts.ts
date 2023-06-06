import { ContentType, createClient, Entry } from "contentful"
import { useEffect, useState } from "react"
import { CONTENTFUL_DELIVERY_KEY, CONTENTFUL_SPACE } from "../../utils/constants"

const client = createClient({
    space: CONTENTFUL_SPACE as string,
    accessToken: CONTENTFUL_DELIVERY_KEY as string
})

export type PostPreview = {
    title: string,
    bannerImg: string,
    date: string
}

export type Config = {
    posts: (ContentType | Entry<PostPreview>)[],
    loading: boolean,
    skip: number,
    limit: number,
    more: boolean
}

const initialConfig: Config = {
    posts: [],
    loading: false,
    skip: -40,
    limit: 40,
    more: true
}

const usePosts = (contentType: string) => {
    const [sConfig, setSConfig] = useState<Config>(initialConfig)
    
    useEffect(() => {
        if (sConfig.skip < 0) return;

        const handlePosts = async () => {
            setSConfig(prev => ({
                ...prev,
                loading: true
            }))

            const col = await client.getEntries({
                content_type: contentType,
                skip: sConfig.skip,
                limit: sConfig.limit,
            })

            setSConfig(prev => ({
                ...prev,
                posts: sConfig.skip === 0 ? col.items : [
                    ...prev.posts,
                    ...col.items as any
                ],
                more: col.items.length < prev.limit ? false : true
            }))

            setSConfig(prev => ({
                ...prev,
                loading: false
            }))
        }
    
        handlePosts()
    }, [sConfig.skip, contentType, sConfig.limit])

    const refresh = () => {
        setSConfig(prev => ({
            ...prev,
            skip: 0,
        }))
    }

    const next = () => {
        setSConfig(prev => ({
            ...prev,
            skip: prev.more ? prev.skip + prev.limit : prev.skip
        }))
    }

    return {
        sConfig,
        refresh,
        next
    }
}

export default usePosts