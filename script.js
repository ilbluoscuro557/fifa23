// --- LOGICA NAVIGAZIONE BOTTONI ---
const bottonehome = document.getElementById("bottone");
if (bottonehome) {
    bottonehome.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

const bottone_back = document.getElementById("bottone_in");
if (bottone_back) {
    bottone_back.addEventListener("click", function(){
        window.location.href = "player.html";
    });
}

// --- LOGICA MOSTRA/NASCONDI NAVBAR ALLO SCROLL ---
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    // Se scorro verso il basso, aggiungo la classe per nascondere la barra
    if (lastScrollY < window.scrollY && window.scrollY > 50) {
        navbar.classList.add("navbar--hidden");
    } 
    // Se scorro verso l'alto (anche di poco), la mostro di nuovo
    else {
        navbar.classList.remove("navbar--hidden");
    }
    
    lastScrollY = window.scrollY;
});

// --- PULIZIA OVERLAY (Opzionale) ---
// Se non usi più il menu laterale, puoi rimuovere questa parte o tenerla se serve per altro
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
});
