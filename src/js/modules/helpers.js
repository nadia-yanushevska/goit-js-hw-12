export function formatSearchValue(value) {
    const words = value.split(' ');
    return words.filter(word => word).join('+');
}

export function showElement(elem) {
    elem.classList.remove('is-hidden');
}
export function hideElement(elem) {
    elem.classList.add('is-hidden');
}
