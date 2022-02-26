import React, { useEffect } from 'react'
import { GifGirdItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs';

const GifGird = async() => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifs(category)
        .then(setimages);
    }, [categorygit])

    const getGifs = () =>{

        const url = 'https://api.giphy.com/v1/gifs/search?api_key={encodeURI(category)}4029qNgQvECA5PhaTUJBZbGLQVpiWSxv&q=Rick and Morty&limit =10'
        const resp = await fetch (url);
        const data = await resp.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.ddownsized_medium.url
            }
        })

        console.log(data);
    }

    getGifts ();

  return (
      <>
    <div claasName="card-grid">
        <h3>{category}</h3>

        {
            images.map(img => (
                <GifGirdItem
                key={img.id}
                {...img}
                />
            )) 
        }

    </div>
    </>
  )
}
