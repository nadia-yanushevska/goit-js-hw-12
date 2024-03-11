import './css/styles.css';
import { showMessage } from './js/modules/izitoast-message.js';
import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import {
    formatSearchValue,
    showElement,
    hideElement,
} from './js/modules/helpers.js';

const message =
    'Sorry, there are no images matching your&nbsp;search query. Please, try again!';
let searchValue;
let pageNum = 1;

const galleryContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('[js-form]');
const loadBtn = document.querySelector('[js-load-btn]');
const loader = document.querySelector('[js-loader]');

searchForm.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadBtn);

function onSearch(e) {
    e.preventDefault();

    galleryContainer.innerHTML = '';
    showElement(loader);

    searchValue = formatSearchValue(e.target.elements['search-name'].value);

    findImages(searchValue);

    hideElement(loader);
    showElement(loadBtn);

    e.target.reset();
}

function onLoadBtn() {
    showElement(loader);

    findImages(searchValue, ++pageNum);

    hideElement(loader);
}

async function findImages(searchValue, pageNum) {
    try {
        const res = await getImages(searchValue, pageNum);
        const data = res.data;
        const imageArray = [...data.hits];
        if (imageArray.length === 0) {
            showMessage(message);
        } else {
            renderGallery(galleryContainer, imageArray);
        }
    } catch (err) {
        showMessage(err);
    }
}
