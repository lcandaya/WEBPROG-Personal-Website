const getToKnowMeBtn = document.getElementById('getToKnowMeBtn');
const homeBtn = document.getElementById('homeBtn');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const galleryBtn = document.getElementById('galleryBtn');
const educationBtn = document.getElementById('educationBtn');
const contentDisplay = document.getElementById('contentDisplay');

// Home button is initially disabled
homeBtn.disabled = true;

getToKnowMeBtn.addEventListener('click', () => {
    contentDisplay.classList.add('show'); // Show abtme, gallery, and educ
    aboutMeBtn.style.display = 'inline-block';
    galleryBtn.style.display = 'inline-block';
    educationBtn.style.display = 'inline-block';

    // Home button is enabled when abtme and educ buttons are shown
    homeBtn.disabled = false;
});

homeBtn.addEventListener('click', () => {
    contentDisplay.classList.remove('show'); // Hide abtme, gallery and educ and resize the card
    aboutMeBtn.style.display = 'none';
    galleryBtn.style.display = 'none';
    educationBtn.style.display = 'none';

    // Disable the home button again
    homeBtn.disabled = true;
});

aboutMeBtn.addEventListener('click', () => {
    window.location.href = 'about me.html';
});

galleryBtn.addEventListener('click', () => {
    window.location.href = 'gallery.html';
});

educationBtn.addEventListener('click', () => {
    window.location.href = 'education.html';
});
