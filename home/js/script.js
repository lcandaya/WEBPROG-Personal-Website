const getToKnowMeBtn = document.getElementById('getToKnowMeBtn');
const homeBtn = document.getElementById('homeBtn');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const galleryBtn = document.getElementById('galleryBtn');
const educationBtn = document.getElementById('educationBtn');
const contentDisplay = document.getElementById('contentDisplay');

// home btn is initially disabled
homeBtn.disabled = true;

getToKnowMeBtn.addEventListener('click', () => {
    contentDisplay.classList.add('show'); // show abtme, gallery, and educ btns
    aboutMeBtn.style.display = 'inline-block';
    galleryBtn.style.display = 'inline-block';
    educationBtn.style.display = 'inline-block';

    // home btn is enabled when abtme and educ btns are shown
    homeBtn.disabled = false;
});

homeBtn.addEventListener('click', () => {
    contentDisplay.classList.remove('show'); // hide abtme, gallery, and educ, and resizes the card container
    aboutMeBtn.style.display = 'none';
    galleryBtn.style.display = 'none';
    educationBtn.style.display = 'none';

    // disables the home btn again
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
