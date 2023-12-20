const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const feedbackInput = document.querySelector('#feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the form fields
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        emailInput.focus();
        return;
    }

    if (feedbackInput.value.trim() === '') {
        alert('Please enter your feedback.');
        feedbackInput.focus();
        return;
    }

    // Submit the form
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            form.reset();
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Thank you for your feedback!';
            form.parentNode.insertBefore(successMessage, form.nextSibling);
        } else {
            alert('There was an error submitting your feedback. Please try again later.');
        }
    };
    xhr.send(new URLSearchParams(new FormData(form)).toString());
});