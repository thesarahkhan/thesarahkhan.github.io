function createStars(type, quantity) {
    for (let i = 0; i < quantity; i++) {
        let star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(0, 100)}vw`;
        star.style.top = `${randomNumber(0, 100)}vh`;
        star.style.opacity = Math.random();
        document.body.appendChild(star);

        star.addEventListener('animationend', function() {
            star.remove();
        });
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function adjustStars() {
    // Adjust your stars based on the viewport size
    // Placeholder for actual logic
    document.querySelectorAll('.star').forEach(star => star.remove());
    createStars(1, 50); // for small devices
    createStars(2, 35); // for medium devices
    createStars(3, 20); // for large devices
}

// Initial star setup
adjustStars();

// Adjust stars on window resize
window.addEventListener('resize', adjustStars);
