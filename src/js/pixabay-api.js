export function getImages(q = '') {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '42730262-d44e8a42848c88033a006d73c',
        q: `"${encodeURI(q)}"`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
    });
}
