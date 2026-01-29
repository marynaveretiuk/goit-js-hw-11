import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54417407-1c43465e9e8135d46dad72044';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
