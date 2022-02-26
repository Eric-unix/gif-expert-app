import React, { useEffect } from 'react'
import { GifGirdItem } from './GifGridItem';

export const GifGird = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifs();
    }, [])

    const getGifs = () =>{

        const url = 'api.giphy.com/v1/gifs/search?api_key=4029qNgQvECA5PhaTUJBZbGLQVpiWSxv&q=Rick and Morty&limit =10'
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
    <div>
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
  )
}
