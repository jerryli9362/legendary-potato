// --- INTRO SEQUENCE ---
const lines = [
    "Hi Stephanie (Bae)",
    "I hope you're having a nice day",
    "I wanted to ask you a quick question..."
];

const introText = document.getElementById("intro-text");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const yayScreen = document.getElementById("yay-screen");
const slideshowContainer = document.getElementById("slideshow-container");
const calendarScreen = document.getElementById("calendar-screen");

let lineIndex = 0;

function showNextLine() {
    if (lineIndex < lines.length) {
        introText.innerText = lines[lineIndex];
        introText.classList.add("fade-in");
        
        setTimeout(() => { introText.classList.remove("fade-in"); }, 2500); 
        setTimeout(() => { lineIndex++; showNextLine(); }, 3500); 
    } else {
        introScreen.style.display = "none";
        mainContent.style.display = "block";
    }
}

window.onload = function() {
    setTimeout(showNextLine, 500);
};

// --- RUNAWAY NO BUTTON ---
function moveButton() {
    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 50);
    var btn = document.querySelector('.no-btn');
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// --- SLIDESHOW DATA ---
const slides = [
    { text: "Let's look back at our 2025 :)", img: "intro.jpeg" },
    { text: "January 2025", img: "jan.jpg" },
    { text: "February 2025", img: "feb.jpg" },
    { text: "March 2025", img: "mar.jpg" },
    { text: "April 2025", img: "apr.jpg" },
    { text: "May 2025", img: "may.jpg" },
    { text: "June 2025", img: "jun.jpg" },
    { text: "July 2025", img: "jul.jpg" },
    { text: "August 2025", img: "aug.jpg" },
    { text: "September 2025", img: "sep.jpg" },
    { text: "October 2025", img: "oct.jpg" },
    { text: "November 2025", img: "nov.jpeg" },
    { text: "December 2025", img: "dec.jpeg" }
];

let currentSlide = 0;

// --- STEP 1: SHE CLICKS YES ---
function sayYes() {
    // Hide the question
    mainContent.style.display = "none";
    
    // Show the "Yay" message
    yayScreen.style.display = "block";
    
    // Wait 3 seconds, then start the slideshow
    setTimeout(() => {
        yayScreen.style.display = "none";
        slideshowContainer.style.display = "block";
        updateSlide();
    }, 3000); // 3000 milliseconds = 3 seconds
}

function updateSlide() {
    const slide = slides[currentSlide];
    document.getElementById("slide-caption").innerText = slide.text;
    document.getElementById("slide-img").src = slide.img;
}

function nextSlide() {
    // If we are at the last slide, go to the calendar
    if (currentSlide === slides.length - 1) {
        slideshowContainer.style.display = "none";
        calendarScreen.style.display = "block";
    } else {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}