import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const params = {
    key: '42730262-d44e8a42848c88033a006d73c',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
};

export function getImages(q = '', page = 1) {
    params.q = q;
    params.page = +page || 1;

    return axios.get('/api/', { params });
}
