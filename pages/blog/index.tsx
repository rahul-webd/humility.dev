import { NextPage } from "next";
import Posts from "../../components/blog";

const BlogPage: NextPage = () => {

    return (
        <Posts
            contentType="blogPost"
            type='dev' />
    )
}

export default BlogPage