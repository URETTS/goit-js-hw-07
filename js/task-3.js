const nameInput = document.querySelector('#name-input');
nameInput.style.width = '360px';
nameInput.style.height = '40px';

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
});
