import Reac, { useState } from "react"

export const GIfExpertApp = () => {

    //const categories= ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['one Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () =>{
        //setCategories (['HunterXHunter',...categories]);
        setCategories( cats =>[...cats,'HunterXHuntex']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
           </ol>
            
        </>
    )
}