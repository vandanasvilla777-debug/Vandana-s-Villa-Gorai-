// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

// ===========================
// STICKY NAVBAR
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// Close menu on link click

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

// ===========================
// ACTIVE MENU
// ===========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .15

});

sections.forEach(section => {

    observer.observe(section);

});

// ===========================
// GALLERY LIGHTBOX
// ===========================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<span id="closeLightbox">&times;</span>

<img id="lightboxImg">

`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
