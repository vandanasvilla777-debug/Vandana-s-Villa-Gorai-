/* ==========================================
   VANDANA'S VILLA
   script.js - Part 1
========================================== */

// ==========================
// LOADER
// ==========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ==========================
// STICKY NAVBAR
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// ACTIVE MENU
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach(item => {

    observer.observe(item);

});

// ==========================
// HERO FADE
// ==========================

const hero = document.querySelector(".hero-content");

if (hero) {

    hero.animate([

        {

            opacity: 0,

            transform: "translateY(40px)"

        },

        {

            opacity: 1,

            transform: "translateY(0)"

        }

    ], {

        duration: 1200,

        fill: "forwards"

    });

}
