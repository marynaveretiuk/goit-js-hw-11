import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      position: 'topRight',
      message: 'Please enter your request in the search field!',
      closeOnClick: true,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const images = data.hits;

      if (!images || images.length === 0) {
        iziToast.warning({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          closeOnClick: true,
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({
        position: 'topRight',
        message: 'Sorry, something went wrong... Try later',
        closeOnClick: true,
      });
    })
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}
