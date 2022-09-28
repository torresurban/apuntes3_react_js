const apiKey = 'hgxtopDwML8nYu832eK2akOQ7vtRGmXd'

const getGifs = ({keyword = 'morty'} = {}) => {
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(urlApi)
            .then(res => res.json())
            .then(respuesta => {
                const {data} = respuesta
                // const gifs2 = data.map(image => image.images.downsized_medium.url)
                const gifs2 = data.map(respuesta3 => {
                    const { images, title, id } = respuesta3
                    const { url } = images.downsized_medium
                    return {title, id, url}
                })
                return gifs2
      })
}

export default getGifs


// const res = await fetch(urlApi)
//     const respuesta = await res.json()
//     const { data } = respuesta
//     const gifs2 = data.map(image => image.images.downsized_medium.url)
//     return gifs2