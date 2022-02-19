import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import './App.css';

export default class App extends Component {
  state = {
    searchName: '',
    showModal: false,
    modalImg: {},
  };

  onSubmit = searchName => {
    // console.log(searchName);
    this.setState({ searchName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModalIMG = evt => {
    this.toggleModal();
    const modalImg = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ modalImg });
  };

  render() {
    const { searchName, showModal, modalImg } = this.state;
    return (
      <div className="App">
        {!showModal && <Searchbar onSubmit={this.onSubmit} />}
        <ImageGallery
          searchName={searchName}
          openModalIMG={this.openModalIMG}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg.largeImageURL} alt={modalImg.alt} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
