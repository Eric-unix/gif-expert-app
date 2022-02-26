import React from 'react';
//import { GifGirdItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGif';

const GifGird = ({category}) => {


    const {loading} = useFetchGifs(category);

  return (
      <>
    <div claasName="card-grid">
        <h3 className='anime_animated animate_fadeIn'>{category}</h3>
        {loading && <p className='anime_animated animate_flash'>loading</p>}
        {
            data.map(img => (
                <GifGirditem
                key={img.id}
                {...img}
                />
            ))
        }

    </div>
    </>
  )
}
