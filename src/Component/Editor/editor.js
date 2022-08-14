import React, {useRef} from 'react'
import Input from '../Input/input'

const Editor = ({props, display}) => {
    const inputCont = useRef(null)
    const content = useRef(null)
    const postTitle = useRef(null)

    const httpGetMethod = async(id, updateItem) => {}

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
                onClick={() => {
                    console.log(postTitle.current,content.current)
                const resp = fetch(`http://localhost:3001/posts/${props.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postTitle)
                })
            }}>Save</button>
        </div>
    )
}

export default Editor