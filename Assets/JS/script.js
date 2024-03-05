window.onload = function() {
    console.log("Page loaded successfully.");
}

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        console.log(`Clicked on project: ${this.textContent}`);
    });
});