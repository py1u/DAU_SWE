// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the button
    const button = document.getElementById('changeTextButton');

    // Add an event listener to the button
    button.addEventListener('click', function () {
        // Change the text content of the button
        button.textContent = 'Text Changed!';
    });
});
