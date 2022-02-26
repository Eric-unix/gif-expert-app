import Reac, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGird } from "./components/GifGird";

export const GIfExpertApp = () => {

    //const categories= ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['one Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            <ol>
                {

                categories.map(category => {
                    <GifGird
                    key={category}
                    category={category}
                    />
                })
            }
           </ol>
            
        </>
    )
}