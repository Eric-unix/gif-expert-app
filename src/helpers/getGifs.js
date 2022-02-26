


const getGifs = async(category) => {
    const url='https://api.giphy.com/v1/gifs/search?api_key={encodeURI(category)}4029qNgQvECA5PhaTUJBZbGLQVpiWSxv&q=Rick and Morty&limit =10'
    const resp = await fetch( url);
    const {data} = await resp.json ();

    const gifs = data.map (img =>{
        return{

            id: img.id,
            title: img.title,
            url: img.image?.downsized_medium.url
        }
    })

    return gifs;
}