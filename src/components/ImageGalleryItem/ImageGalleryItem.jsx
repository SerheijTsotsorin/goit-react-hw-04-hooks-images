import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ pictures, openModalIMG }) {
  return pictures.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={`modalImg ${id}`}
        data-url={largeImageURL}
        onClick={openModalIMG}
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  openModalIMG: PropTypes.func,
};
