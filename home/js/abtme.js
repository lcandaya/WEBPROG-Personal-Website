const buttons = document.querySelectorAll('.button-container button');
const displayBox = document.getElementById('display-box');
const contentElements = {}; 

document.querySelectorAll('.hidden-content').forEach(element => {
    contentElements[element.id] = element.innerHTML;
    element.remove();
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        if (contentElements[targetId]) {
            displayBox.innerHTML = contentElements[targetId];
        }

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

if (contentElements['about-me']) {
    displayBox.innerHTML = contentElements['about-me'];
}
