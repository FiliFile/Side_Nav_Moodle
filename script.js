document.getElementById("logoo").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("logooo").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("sidehome").addEventListener("click", function(event) {
    event.preventDefault();
    let bawahhome = document.getElementById("bawahhome");
    bawahhome.classList.toggle("show");
});

document.getElementById("sidegallery").addEventListener("click", function(event) {
    event.preventDefault();
    let bawahgallery = document.getElementById("bawahgallery");
    bawahgallery.classList.toggle("show");
});

document.getElementById("sidelearning").addEventListener("click", function(event) {
    event.preventDefault();
    let bawahlearning = document.getElementById("bawahlearning");
    bawahlearning.classList.toggle("show");
});