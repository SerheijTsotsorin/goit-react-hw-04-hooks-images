import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

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

  handleSearchSubmit = searchName => {
    // console.log(searchName);
    this.setState({ searchName });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  openModalIMG = evt => {
    const modalImg = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ modalImg });
    this.toggleModal();
  };

  render() {
    const { searchName, showModal, modalImg } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg.largeImageURL} alt={modalImg.alt} />
          </Modal>
        )}

        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          searchName={searchName}
          openModalIMG={this.openModalIMG}
        />

        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}
