document.addEventListener("DOMContentLoaded", function() {
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("header_nav");

navToggle.addEventListener("click", function(event) {
    event.preventDefault();

    nav.classList.toggle("show");
});

})