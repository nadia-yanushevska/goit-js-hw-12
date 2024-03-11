import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
export const PER_PAGE = 15;
const params = {
    key: '42730262-d44e8a42848c88033a006d73c',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
};

export function getImages(q = '', page = 1) {
    params.q = q;
    params.page = +page || 1;

    return axios.get('/api/', { params });
}
