import { useState } from "react"



export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading:true 
    });

    setTimeout ( () => {
        setState ({
            data: [1,2,,4,5,6,7],
            loading:false
        })
    }, 3000 );
}