const closeBtn = document.getElementById('close-btn');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btn-submit');

function onCloseCard() {
    if (form.style.display == 'block') {
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    }
}



closeBtn.addEventListener('click', onCloseCard);
