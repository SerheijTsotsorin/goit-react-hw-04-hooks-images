import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import api from '../Servisces/FetchPictures';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchName;
    const nextSearch = this.props.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'panding' });

      api
        .fetchPictures(nextSearch, 1)
        .then(data => {
          this.setState({
            pictures: data.hits,
            status: 'resolved',
          });
          if (data.total === 0) {
            return Promise.reject(new Error(`Error search result, try again`));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevPage !== nextPage) {
      api
        .fetchPictures(nextSearch, nextPage)
        .then(data => {
          this.setState({
            pictures:
              nextPage > 1 ? [...prevState.pictures, ...data.hits] : data.hits,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onLoadMore() {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    const { pictures, error, status } = this.state;
    if (status === 'idle') {
      return <h1>Enter search</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul>
            <ImageGalleryItem
              pictures={pictures}
              openModalIMG={this.props.openModalIMG}
            />
          </ul>
          <Button onLoadMore={() => this.onLoadMore()} />
        </>
      );
    }
  }
}

// export default ImageGallery;
