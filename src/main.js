import './css/styles.css';
import { showMessage } from './js/modules/izitoast-message.js';
import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import {
    showLoader,
    hideLoader,
    formatSearchValue,
} from './js/modules/helpers.js';

const message =
    'Sorry, there are no images matching your&nbsp;search query. Please, try again!';

const galleryContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('[js-form]');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    showLoader(galleryContainer);

    const searchValue = formatSearchValue(
        e.target.elements['search-name'].value
    );
    findImages(searchValue);

    e.target.reset();
}

function findImages(searchValue) {
    getImages(searchValue)
        .then(res => {
            const imageArray = [...res.hits];
            if (imageArray.length === 0) {
                hideLoader(galleryContainer);
                showMessage(message);
            } else {
                renderGallery(galleryContainer, imageArray);
            }
        })
        .catch(err => {
            hideLoader(galleryContainer);
            showMessage(err);
        });
}
