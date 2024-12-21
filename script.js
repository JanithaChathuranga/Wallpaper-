// script.js

document.addEventListener('DOMContentLoaded', function() {
    const wallpapers = document.querySelectorAll('.wallpaper img');

    wallpapers.forEach(wallpaper => {
        wallpaper.addEventListener('click', function() {
            openFullScreen(wallpaper.src);
        });
    });

    function openFullScreen(imageSrc) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const fullImage = document.createElement('img');
        fullImage.src = imageSrc;
        fullImage.classList.add('full-image');

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.classList.add('close-btn');

        closeBtn.addEventListener('click', function() {
            overlay.remove();
        });

        overlay.appendChild(fullImage);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
    }
});