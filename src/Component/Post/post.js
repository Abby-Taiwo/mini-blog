import React from 'react'
import "./post.css"
const Post = ({props}) => {
  return (
    <div className="post">
                <h1>{props.postTitle}</h1>
                {props.blogImage
                    ? <img
                            src={props.blogImage}
                            style={{
                            margin: "40px 0 0 ",
                            height: "350px",
                            width: "450px"
                        }} alt=""/>
                    : ""}
                <p>{props.content}</p>
            </div>
  )
}

export default Post