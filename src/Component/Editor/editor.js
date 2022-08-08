import React, {useRef} from 'react'
import Input from '../Input/input'

const Editor = ({props,display}) => {
  const inputCont = useRef(null)
  
  console.log(inputCont)
  return (
    <div className='input' ref={inputCont} style={{display: display}}>
                <h3>title</h3>
                <Input content={props.title} style={{height: "30px"}}/>
                <h3>content</h3>
                <Input content={props.content} style={{height: "380px"}} />
                <button onClick={""}>Save</button> 
    </div>
  )
}

export default Editor