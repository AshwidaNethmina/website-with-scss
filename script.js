// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    const refreshButton = document.getElementById('refreshButton');

    // Add a click event listener to the button
    refreshButton.addEventListener('click', function () {
        // Refresh the page
        location.reload();
    });
    
});