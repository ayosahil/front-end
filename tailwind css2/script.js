// script.js

document.getElementById("openSignup").addEventListener("click", function() {
    document.getElementById("signupModal").style.display = "block";
});

document.getElementById("closeSignup").addEventListener("click", function() {
    document.getElementById("signupModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("signupModal")) {
        document.getElementById("signupModal").style.display = "none";
    }
});

document.querySelectorAll(".buy").forEach(button => {
    button.addEventListener("click", function() {
        const planet = this.getAttribute("data-planet");
        document.getElementById("planet").value = planet;
        document.getElementById("buyNowModal").style.display = "block";
    });
});

document.getElementById("closeBuyNow").addEventListener("click", function() {
    document.getElementById("buyNowModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("buyNowModal")) {
        document.getElementById("buyNowModal").style.display = "none";
    }
});



// Smooth scrolling to top when Shop Now button is clicked
const shopNowButton = document.getElementById('shopNowButton');

shopNowButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Offer buttons functionality
const offerButtons = document.querySelectorAll('.offer button');

offerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offer = button.parentNode.querySelector('h2').textContent;
        alert(`You have activated the offer: ${offer}`);
    });
});
