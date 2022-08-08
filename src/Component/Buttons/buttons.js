import React from 'react'

const Buttons = ({setDisplay}) => {

    return (
        <div className='buttons'>
            <button
                onClick={() => {
                setDisplay('flex') 
                // display === "flex" // ? setDisplay('flex') // : setDisplay('none')
             }}>
                <img
                src="https://th.bing.com/th/id/OIP.kqt2LmpQmes4Ji4p4Z8R5gAAAA?pid=ImgDet&w=180&h=180&rs=1"
                alt=''/>Edit</button>
            <button><img
                src="https://static.vecteezy.com/system/resources/previews/000/422/370/original/like-icon-vector-illustration.jpg"
                alt=''/>Like</button>
            <button><img src="https://img.icons8.com/flat-round/344/share--v1.png" alt=''/>Share</button>
        </div>
    )
}
export default Buttons