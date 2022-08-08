import React from 'react'

const Input = ({content}) => {
    return (<textarea
        value={content}
        onChange={(e) => {
      
    }}
        style={{
        resize: 'none'
    }} required/>)
}

export default Input