import { Entry } from "contentful"
import { useEffect, useState, useContext } from "react"
import { AppContext } from "../../components/app/App"
import { PostModel } from "../../components/posts/Post"

export type Config = {
    posts: Entry<PostModel>[],
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

const usePosts = (contentType: string, type: string) => {
    const [sConfig, setSConfig] = useState<Config>(initialConfig)
    const appContext = useContext(AppContext)
    const client = appContext?.cfClient;
    
    useEffect(() => {
        if ((sConfig.skip < 0) || !contentType || !type) return;

        const handlePosts = async () => {
            if (!client) return;

            setSConfig(prev => ({
                ...prev,
                loading: true
            }))

            const col = await client.getEntries<PostModel>({
                content_type: contentType,
                skip: sConfig.skip,
                limit: sConfig.limit,
                'metadata.tags.sys.id[all]': `${type}`,
                select: 'fields.bannerImage,fields.title,fields.date',
                order: '-sys.createdAt'
            })

            console.log(col)

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
    }, [sConfig.skip, contentType, type, sConfig.limit, client])

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