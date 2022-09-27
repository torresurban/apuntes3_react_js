import axios from 'axios'

export const getAllNotes = () => {
   return axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const {data} = res
                return data
            })
}


/* export const getAllNotes = async () => {
    const res = await axios
         .get('https://jsonplaceholder.typicode.com/posts')
     const { data } = res
     return data
 } */
