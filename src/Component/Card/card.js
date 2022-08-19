import React, {useState} from 'react'
import Post from '../Post/post'
import Editor from '../Editor/editor'
import "./card.css"
import Buttons from '../Buttons/buttons'

const Card = ({props}) => {

    const [display,
        setDisplay] = useState("none")
    
    
    

    return (
        <div className='card'>
            <div className='card-info'>
                <img src={props.image} alt='blog-writer-pic'/>
                <span>
                    <div>{props.name}</div>
                    <a href={`malto:${props.email}`}>{props.email}</a>
                    
                </span>
            </div>
            <Post props={props}/>
            <Editor props={props} display={display} setDisplay={setDisplay} />
            <Buttons setDisplay={setDisplay}/>
        </div>
    )
}

export default Card