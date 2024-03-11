import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function renderGallery(gallery, images) {
    gallery.insertAdjacentHTML('beforeend', galleryTemplate(images));
    lightbox.refresh();
}

function galleryTemplate(images) {
    return images.map(imageTemplate).join('\n\n');
}

function imageTemplate(img) {
    const {
        webformatURL: previewURL,
        largeImageURL,
        previewHeight,
        previewWidth,
        likes,
        views,
        comments,
        downloads,
        tags: alt,
    } = img;
    return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${previewURL}"
                        alt="${alt}"
                        width="${previewWidth}"
                        height="${previewHeight}"
                    />
                </a>
                <ul class="desc-list">
                        <li class="desc-li">
                            <h3 class="bold">Likes</h3>
                            <p>${likes}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Views</h3>
                            <p>${views}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Comments</h3>
                            <p>${comments}</p>
                        </li>
                        <li class="desc-li">
                            <h3 class="bold">Downloads</h3>
                            <p>${downloads}</p>
                        </li>
                    </ul>
            </li>`;
}
