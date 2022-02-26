import React, { useEffect } from 'react'

export const GifGird = ({category}) => {

    const [count, setCount] = useState(0);

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
        <h3>{count} </h3>
        <button onClick={ () => setcount (count +1)}></button>

    </div>
  )
}
