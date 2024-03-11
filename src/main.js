import './css/styles.css';
import { showMessage } from './js/modules/izitoast-message.js';
import { getImages, PER_PAGE } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import {
    formatSearchValue,
    showElement,
    hideElement,
} from './js/modules/helpers.js';

const noImgMessage = `Sorry, there are no images matching your&nbsp;search query. Please, try again!`;
const limitMessage = `"We're sorry, but you've reached the end of search results."`;
let searchValue, previousSearchValue;
let pageNum = 1;

const galleryContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('[js-form]');
const loadBtn = document.querySelector('[js-load-btn]');
const loader = document.querySelector('[js-loader]');

searchForm.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadBtn);
document.addEventListener('wheel', onGalleryScroll);

function onSearch(e) {
    e.preventDefault();

    showElement(loader);
    galleryContainer.innerHTML = '';

    searchValue = formatSearchValue(e.target.elements['search-name'].value);
    if (previousSearchValue !== searchValue) {
        pageNum = 1;
    } else pageNum++;

    findImages(searchValue, pageNum);
    previousSearchValue = searchValue;

    e.target.reset();
}

async function onLoadBtn() {
    showElement(loader);

    await findImages(searchValue, ++pageNum);

    onGalleryScroll({ deltaY: 10 });
}

async function findImages(searchValue, pageNum = 1) {
    hideElement(loadBtn);

    try {
        const res = await getImages(searchValue, pageNum);
        const data = res.data;

        const imageArray = [...data.hits];
        const totalHits = data.totalHits;

        if (imageArray.length === 0) {
            showMessage(noImgMessage);
        } else {
            renderGallery(galleryContainer, imageArray);

            totalHits > pageNum * PER_PAGE
                ? showElement(loadBtn)
                : showMessage(limitMessage);
        }
    } catch (err) {
        showMessage(err);
    } finally {
        hideElement(loader);
    }
}

function onGalleryScroll(e) {
    const multiplier = e.deltaY > 0 ? 2 : -2;

    const card = galleryContainer.querySelector('.gallery-item');
    const cardHeight = Number.parseInt(card.getBoundingClientRect().height);

    const options = {
        top: multiplier * cardHeight,
        behavior: 'smooth',
    };

    window.scrollBy(options);
}
