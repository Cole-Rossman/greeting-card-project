const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-header');
    nameInput.addEventListener('input', () => {
        nameHeader.textContent = nameInput.value;
});

const watchSelect = document.getElementById('watch-select');
const watchImage = document.getElementById('watch-image');
watchSelect.addEventListener('change', () => {
watchImage.src = watchSelect.value;
});

const watchDescriptionTextArea = document.getElementById('watch-description-textarea');
const descriptionDisplay = document.getElementById('description-display');
watchDescriptionTextArea.addEventListener('input', () => {
    descriptionDisplay.textContent = watchDescriptionTextArea.value;
});

const backgroundSelect = document.getElementById('background-select');
const watch = document.getElementById('watch');
backgroundSelect.addEventListener('change', () => {
    watch.classList.value = '';
    watch.classList.add(backgroundSelect.value);
});

const yourWatch = document.getElementById('your-watch');
yourWatch.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toJpeg(watch);
    const link = document.createElement('a');
    link.download = nameInput.value + '.jpeg';
    link.href = dataUrl;
    link.click();
});