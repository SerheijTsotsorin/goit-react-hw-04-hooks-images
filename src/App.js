import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import './App.css';

export default function App () {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState({});
  
  const handleSearchSubmit = searchName => {
    // console.log(searchName);
    setSearchName(searchName);
    setPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

const openModalIMG = evt => {
    const modalImg = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    setModalImg( modalImg );
    toggleModal();
  };

  
    return (
      <div className="App">
        {showModal && 
          <Modal onClose={toggleModal}>
            <img src={modalImg.largeImageURL} alt={modalImg.alt} />
          </Modal>
        }

        <Searchbar onSubmit={handleSearchSubmit} />
        <ImageGallery
          searchName={searchName}
          openModalIMG={openModalIMG}
          page={page}
          setPage={setPage}
        />

        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
};


  

  

  

  

