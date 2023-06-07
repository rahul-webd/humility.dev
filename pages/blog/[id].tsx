import { NextPage } from "next";
import { useRouter } from "next/router";
import Post from "../../components/posts/Post";

const ArticlePage: NextPage = () => {
    const { query: { id } } = useRouter()

    return (
        <Post
            id={id as string} />
    )
}

export default ArticlePage;