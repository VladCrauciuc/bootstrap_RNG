// const myGuess = Math.floor(Math.random() * 50 + 1);
// const form = document.getElementById('inputForm');
// const inputElement = document.getElementById('inputField');
// const messageParagraph = document.createElement('p');
// document.body.append(messageParagraph);

// form.addEventListener('submit', (event) => {
//   let message = '';
//   if (Number(inputElement.value) === myGuess) {
//     message = 'Acesta este numarul. A winner is you :)';
//   } else if (Number(inputElement.value) > myGuess) {
//     message = 'Numarul pe care il cauti este mai mic. Mai baga o fisa';
//   } else {
//     message = 'Numarul pe care il cauti este mai mare. Mai baga o fisa';
//   }
//   messageParagraph.innerText = message;
//   event.preventDefault();
// });

const generatedNumber = Math.floor(Math.random() * 100 +1);
const form = document.getElementById('inputForm');
const inputField = document.getElementById('inputField');
const messageSpan = document.getElementById('messageSpan');
const messageContainer = document.getElementById('messageContainer');
const messageType = document.getElementById('messageType')

form.addEventListener('submit', (event) => {
    let message = '';
    if (Number(inputField.value) === generatedNumber) {
        message = 'This is the number. Play again? (refresh page)';
        messageContainer.classList.remove('d-none');
        messageContainer.classList.add('d-flex');
        messageType.classList.remove('alert-warning');
        messageType.classList.add('alert-success');
    } else if (Number(inputField.value) > generatedNumber) {
        message = 'The number is smaller than your guess. Try again';
        messageContainer.classList.add('d-flex');
        messageContainer.classList.remove('d-none');
        setTimeout(() => {
            messageContainer.classList.remove('d-flex');
            messageContainer.classList.add('d-none');
        }, 1500)
    } else {
        message = 'The number is greater than your guess. Try again';
        messageContainer.classList.add('d-flex');
        messageContainer.classList.remove('d-none');
        setTimeout(() => {
            messageContainer.classList.remove('d-flex');
            messageContainer.classList.add('d-none');
        }, 1500)
    }
    messageSpan.innerText = message;
    event.preventDefault();
})