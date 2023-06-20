// script.js

// Start by showing the 'home' card
show('home');

function show(id) {
    // Get all cards
    const cards = document.getElementsByClassName('card');

    // Hide all cards
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
    }

    // After a short delay, hide the cards completely and show the requested card
    setTimeout(function() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'none';
        }
        const card = document.getElementById(id);
        card.style.display = 'block';
        setTimeout(function() {
            card.style.opacity = '1';
        }, 100);
    }, 500);  // This should match the transition duration in the CSS
}
