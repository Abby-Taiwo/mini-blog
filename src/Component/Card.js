import React from 'react'
import "./card.css"

const Card = ({props}) => {

    return (
        <div className='card'>
            <div className='card-info'>
                <img src={props.image} alt='blog-writer-pic'/>
                <span>
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                </span>
            </div>

            <p>{props.post}</p>
            <button>Edit post</button>
        </div>
    )
}

export default Card