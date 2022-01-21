const menu_btn = document.querySelector(".menu-btn");
const nav_links = document.querySelector(".nav-links");

menu_btn.addEventListener("click", () => {
    nav_links.classList.toggle("mobile-menu");
})

// scroll reveal

window.sr = ScrollReveal();

    sr.reveal('.heading', {
        duration: 2000,
        origin: "bottom",
        distance: "-100px"
    });

    sr.reveal('.btn', {
        duration: 2000,
        origin: "bottom",
        distance: "-100px"
    });

    sr.reveal('.subheading', {
        duration: 2000,
        origin: "bottom",
        distance: "-100px"
    });

    sr.reveal('.card-1', {
        duration: 2000,
        origin: "left",
        distance: "400px"
    });

    sr.reveal('.card-2', {
        duration: 2000,
        origin: "left",
        distance: "400px"
    });

    sr.reveal('.card-3', {
        duration: 2000,
        origin: "left",
        distance: "400px"
    });

    sr.reveal('.explore', {
        duration: 2000,
        origin: "bottom",
        distance: "400px"
    });

    sr.reveal('.tours', {
        duration: 2000,
        origin: "bottom",
        distance: "400px"
    });