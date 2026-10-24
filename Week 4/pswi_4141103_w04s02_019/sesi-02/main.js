const greetingButton =
    document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
    alert('semangat yap!');
    console.log('main.js berhasil dijalankan');
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Pendaftaran Anda Sudah Berhasil!');
});