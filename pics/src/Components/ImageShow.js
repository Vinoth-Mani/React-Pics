import './searchBar.css';

function ImageShow({ image }) {
    return (
        <div className='search-bar' key={image.id}>

            <img src={image.urls.small} alt={image.description} />
        </div>
    )
}
export default ImageShow;