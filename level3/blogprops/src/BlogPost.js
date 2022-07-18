import React from "react";



export default function BlogPost(props) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <h3>{props.item.subTitle}</h3>
            <p>Posted by <a href=''>{props.item.author}</a> on {props.item.date}</p>
        </div>
    )
}