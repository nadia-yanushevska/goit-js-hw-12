// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getToastOptions } from './izitoast-options.js';

export function showMessage(message) {
    console.log(message);
    iziToast.show(getToastOptions(message));
}
