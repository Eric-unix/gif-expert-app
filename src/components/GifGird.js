import React from 'react';
//import { GifGirdItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGif';

const GifGird = ({category}) => {


    const {loading} = useFetchGifs(category);

  return (
      <>
    <div claasName="card-grid">
        <h3>{category}</h3>
        {loading && <p>loading</p>}
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
