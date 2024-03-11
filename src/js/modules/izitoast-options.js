import errorIcon from '../../img/error.svg';

export function getToastOptions(message) {
    const options = {
        message,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fff',

        iconUrl: errorIcon,

        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',

        theme: 'dark',
        position: 'topRight',
        class: 'message',
    };
    return options;
}
