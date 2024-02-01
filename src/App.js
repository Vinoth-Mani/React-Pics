import SearchBar from './Components/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';

function App() {

    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        console.log('Search Completed for: ', term)
        const searchImg = await searchImages(term)
        setImages(searchImg)
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>)
}

export default App;