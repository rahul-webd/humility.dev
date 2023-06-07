import { NextPage } from "next";
import Posts from "../../components/posts";

const PrivateBlogPage: NextPage = () => {

    return (
        <Posts
            contentType="blogPost"
            type="private" />
    )
}

export default PrivateBlogPage