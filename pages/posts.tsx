import { NextPage } from "next";
import { Post, PostModel } from "../components/containers/posts/Post";
import { fetchEntries } from "../util/contentfulPosts";

const PostsPage: NextPage<{ posts: any[] }> = ({ posts }) => {

    return (
        <section>
            {
                posts.map(p => {

                    return (
                        <Post
                            key={p.date}
                            title={p.title}
                            image={p.image}
                            description={p.description.content.map((c: any) => c.content.map((c: any) => c.value))}
                            date={p.date} />
                    )
                })
            }
        </section>
    )
}

export default PostsPage

export async function getStaticProps() {
    const res = await fetchEntries()
    let posts: any[] = []

    if (res.ok) {
        posts = res.items.map(t => {
            return t.fields
        })
    }

    return {
        props: {
            posts
        }
    }
}