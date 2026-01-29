import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <li class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item">
            <span class="label">Likes</span>
            <span class="value">${likes}</span>
          </p>
          <p class="info-item">
            <span class="label">Views</span>
            <span class="value">${views}</span>
          </p>
          <p class="info-item">
            <span class="label">Comments</span>
            <span class="value">${comments}</span>
          </p>
          <p class="info-item">
            <span class="label">Downloads</span>
            <span class="value">${downloads}</span>
          </p>
        </div>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
