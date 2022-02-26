import { useState } from "react"



export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading:true 
    });

    useEfects( () => {
        getGifs(category)
        .then (img => {

            setTimeout ( () => {

                console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                });
            }), 3000
        })   
     })
}, [category]
