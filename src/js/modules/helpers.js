const loaderMarkup = `<span class="loader"></span>`;

export function showLoader(container) {
    container.innerHTML = loaderMarkup;
}

export function hideLoader(container) {
    container.innerHTML = '';
}

export function formatSearchValue(value) {
    const words = value.split(' ');
    return words.filter(word => word).join('+');
}