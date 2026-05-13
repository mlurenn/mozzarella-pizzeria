// Task 2
const pizzas = [
    "Margherita - Tomatsås, mozzarella, basilika",
    "Vesuvio - Skinka, champinjoner, mozzarella",
    "Quattro Stagioni - Tomatsås, ost, skinka, champinjoner, räkor, kronärtskocka",
];

function pickRandomItem(){
    const randomId = Math.floor(Math.random() * pizzas.length);
    document.getElementById("special-item").textContent = pizzas[randomId];
}

window.onload = pickRandomItem;

// Task 3
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    const btn = event.target;
    btn.textContent = document.body.classList.contains("dark-mode") ? "Ljust läge" : "Mörkt Läge";
}

function zoomIn(element){
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease";
}

function zoomOut(element){
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s ease";
}


// Task 4 - jquery
$(document).ready(function(){
    
    // Welcome banner
    $("#toggle-banner").click(function () {
        $("#welcome-banner").fadeToggle(600);
    });

    // Responsiv meny - hamburgermeny
    $(".hamburger").click(function (){
        $("#nav-menu").slideToggle(300);
    });

    $("#nav-menu a").click(function (){
        if($(window).width() <= 900){
            $("#nav-menu").slideUp(300);
        }
    });
});