import { axios } from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const getPublications = async (name, page=1) => {
//     try {
//         const response = await axios.get(`?q=${name}&page=${page}&key=25580074-861787f825c576fda9c500e38&image_type=photo&orientation=horizontal&per_page=12`);
//         return response.data;
//     } catch (error) {
//     console.log(error);
//   }
// }

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '25580074-861787f825c576fda9c500e38';

export async function fetchPictures(name, page = 1) {
  try {
    const response = await axios.get(
      `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// export default fetchPictures;
