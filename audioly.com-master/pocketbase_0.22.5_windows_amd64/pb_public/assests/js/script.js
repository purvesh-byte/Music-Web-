document.getElementById("scrollRight").addEventListener("click", function() {
    const scrollAmount = 24; // Adjust the scroll distance as needed
    const scrollContainer = document.querySelector('.scroll-container');
    
    // Calculate the current scroll position and scroll to the right
    scrollContainer.scrollLeft += scrollAmount;
});
