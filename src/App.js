import './App.css';
import { ToastContainer } from 'react-toastify';
// import { fetchPictures } from "./components/Servisces/FetchPictures";
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';

class App extends Component {
  state = {
    searchName: '',
  };

  // async componentDidMount() {
  // const data = await fetchPictures();
  // console.log(data);
  // };

  onSubmit = searchName => {
    console.log(searchName);
    this.setState({ searchName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

export default App;
