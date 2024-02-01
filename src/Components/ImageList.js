
import ImageComponent from "./ImageShow";
import './imageList.css';
function ImageList({ images }) {

    const imageList = images.map((image) => {
        return <ImageComponent key={image.id} image={image} />
    });
    return (
        <div className="image-list">
            {imageList}
        </div>
    )
}

export default ImageList;