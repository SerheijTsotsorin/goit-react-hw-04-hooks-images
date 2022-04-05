import { useState, useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import api from '../Servisces/FetchPictures';
import './ImageGallery.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({
  searchName,
  openModalIMG,
  page,
  setPage,
}) {
  const [pictures, setPictures] = useState([]);
  // const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    setStatus(Status.PENDING);

    api
      .fetchPictures(searchName, page)
      .then(data => {
        setPictures(prevPictures =>
          page > 1 ? [...prevPictures, ...data.hits] : data.hits
        );

        setStatus(Status.RESOLVED);
        if (data.total === 0) {
          return Promise.reject(new Error(`Error search result, try again`));
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchName, page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (status === Status.IDLE) {
    return <h1>Enter search</h1>;
  }
  if (status === Status.PENDING) {
    if (pictures.length !== 0) {
      return (
        <>
          <ImageGalleryItem pictures={pictures} />
        </>
      );
    }
    return <Loader />;
  }
  if (status === Status.REJECTED) {
    return <h2>{error.message}</h2>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem pictures={pictures} openModalIMG={openModalIMG} />
        </ul>
        <Button onLoadMore={() => onLoadMore()} />
      </>
    );
  }
}
