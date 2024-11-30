function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.getElementById('controls');
    const input = controls.querySelector('input');
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function createBoxes(amount) {
      const boxes = [];
      let size = 30; 

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = "5px";
        boxes.push(box);
        size += 10; 
      }

      boxesContainer.innerHTML = ''; 
      boxesContainer.append(...boxes); 
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', () => {
      const amount = Number(input.value);

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; 
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });

    destroyButton.addEventListener('click', destroyBoxes);