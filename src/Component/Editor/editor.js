import React, {useRef} from 'react'
import Input from '../Input/input'
import "./editor.css"

const Editor = ({props, display, setDisplay}) => {
    const inputCont = useRef(null)
    const content = useRef(null)
    const postTitle = useRef(null)

    return (
        <div
            className='input'
            ref={inputCont}
            style={{
            display: display
        }}>
            <h3>title</h3>
            <Input content={props.postTitle} ref={postTitle}/>
            <h3>content</h3>
            <Input content={props.content} ref={content}/>
            <button
                onClick={async() => {
               fetch(`http://localhost:3001/posts/${props.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        postTitle: postTitle.current,
                        content: content.current,
                        email: props.email,
                        image: props.image,
                        blogImage: props.blogImage,
                        name: props.name
                    })
                })
                setDisplay('none')
                window.location.reload()
            }}>Save</button>
        </div>
    )
}

export default Editor