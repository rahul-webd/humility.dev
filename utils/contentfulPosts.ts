import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const delivery_key = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_KEY

export const fetchEntries = async () => {
    if (space && delivery_key) {
        const client = createClient({
            space,
            accessToken: delivery_key
        })

        const entries = await client.getEntries()
        if (entries.items) {
            return {
                ok: true,
                items: entries.items
            }
        }
    }
    
    return {
        ok: false,
        items: []
    }
}

export default { fetchEntries }