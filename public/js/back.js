document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('.back-button');
    
    // Add event listener to the button
    homeButton.addEventListener('click', () => {
        window.location.href = "/"; // Redirect to home page
    });
});