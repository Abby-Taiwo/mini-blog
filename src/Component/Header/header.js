import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <h3>Mini blog</h3>
            <span>made with
                <img
                    src="https://w7.pngwing.com/pngs/997/899/png-transparent-red-heart-illustration-heart-icon-3d-red-heart-love-heart-emoticon.png"
                    alt="love icon"/>
                by
                <a href="https://github.com/Abby-Taiwo">Aderinto ummani</a>
            </span>
        </div>
    )
}

export default Header