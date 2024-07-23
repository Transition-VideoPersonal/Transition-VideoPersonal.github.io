document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const totalImages = images.length;
    const duration = 5; // seconds
    let index = 0;

    const backgroundMusic = document.getElementById("background-music");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", () => {
        backgroundMusic.play();
        playButton.style.display = 'none'; // Hide the play button after clicking

        setInterval(() => {
            index = (index + 1) % totalImages;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }, duration * 1000);
    });
});
