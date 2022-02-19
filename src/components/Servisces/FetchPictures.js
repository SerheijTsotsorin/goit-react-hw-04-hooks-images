// import { axios } from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '25580074-861787f825c576fda9c500e38';

// export async function fetchPictures(name, page = 1) {
//   try {
//     const response = await axios.get(
//       `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

const KEY = '25580074-861787f825c576fda9c500e38';

function fetchPictures(name, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Error search result, try again`));
  });
}

const api = {
  fetchPictures,
};

export default api;
