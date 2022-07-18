import React from "react";
import data from "./data";
import BlogPost from "./BlogPost";


export default function BlogList() {
    const posts = data.map(item => {
        return (
            <div>
                <BlogPost 
                    item={item}
                />
                <hr />
            </div>
        )
    })

    return (
        <div className="blogList">
            {posts}
            <button className="blogList--olderPostsBtn">OLDER POSTS ⟶</button>
        </div>
    )
}