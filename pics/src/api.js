import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID GXpOd9mUiPHPl-uy9y61SzGcl2kkfu0cphLRNv47UNk'
        },
        params: {
            query: term,
        }
    })

    // console.log(response)
    return response.data.results
}

export default searchImages