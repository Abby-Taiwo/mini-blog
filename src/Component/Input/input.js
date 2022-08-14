import React,{ useState, forwardRef, useImperativeHandle} from 'react'

const Input = ({ content }, ref) => {

    const [Input, setInput] = useState(content)

    useImperativeHandle(
      ref,
      () => Input,
      [Input],
    )
    return (<textarea
        value={Input}
        style={{
        resize: 'none'}}
        onChange={(e) => {setInput(e.target.value)}}
        required/>)
}

export default forwardRef(Input)