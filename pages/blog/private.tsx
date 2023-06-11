import { NextPage } from "next";
import Posts from "../../components/blog";

const PrivateBlogPage: NextPage = () => {

    return (
        <Posts
            contentType="blogPost"
            type="private" />
    )
}

export default PrivateBlogPage