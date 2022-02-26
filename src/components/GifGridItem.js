import React from 'react'

export const GifGirdItem = ({title, url}) => {


    return (
        <div className='card'>
            <img src={url} alt ={title}/>
            <p>{title} </p>
        </div>
    )
}