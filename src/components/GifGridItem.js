import React from 'react'

export const GifGirdItem = ({title, url}) => {


    return (
        <div className='card animate_animated animate_bounce'>
            <img src={url} alt ={title}/>
            <p>{title} </p>
        </div>
    )
}