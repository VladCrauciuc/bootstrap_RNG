const generatedNumber = Math.floor(Math.random() * 100 +1);
const form = document.getElementById('inputForm');
const inputField = document.getElementById('inputField');
const messageSpan = document.getElementById('messageSpan');
const messageContainer = document.getElementById('messageContainer');
const messageType = document.getElementById('messageType');
const restartButton = document.getElementById('restartButton');

form.addEventListener('submit', (event) => {
    let message = '';
    if (Number(inputField.value) === generatedNumber) {
        message = 'This is the number. Play again?';
        messageContainer.classList.remove('d-none');
        messageContainer.classList.add('d-flex');
        messageType.classList.remove('alert-warning');
        messageType.classList.add('alert-success');
        restartButton.classList.remove('d-none');
        form.reset();
    } else if (Number(inputField.value) > generatedNumber) {
        message = 'The number is smaller than your guess. Try again';
        messageContainer.classList.add('d-flex');
        messageContainer.classList.remove('d-none');
        form.reset();
    } else {
        message = 'The number is greater than your guess. Try again';
        messageContainer.classList.add('d-flex');
        messageContainer.classList.remove('d-none');
        form.reset();
    }
    messageSpan.innerText = message;
    event.preventDefault();
})

restartButton.addEventListener('click', () => {
    window.location.reload();
});