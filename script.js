// ===============================
// VANDANA'S VILLA - script.js
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });

            if (navLinks) {
                navLinks.classList.remove("active");
            }
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// Reveal Animation
const revealItems = document.querySelectorAll(
    ".amenity-card,.feature-box,.gallery-item,.room-card,.review-card,.why-card,.nearby-card,.reach-card"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: 0.15 });

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

    revealObserver.observe(item);

});

// Booking Form → WhatsApp
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = bookingForm.querySelectorAll("input, textarea");

        const name = inputs[0].value;
        const phone = inputs[1].value;
        const email = inputs[2].value;
        const date = inputs[3].value;
        const guests = inputs[4].value;
        const message = inputs[5].value;

        const whatsappMessage =
`🏡 *New Booking Request*

👤 Name: ${name}

📞 Mobile: ${phone}

📧 Email: ${email}

📅 Date: ${date}

👥 Guests: ${guests}

📝 Message:
${message}`;

        window.open(
            "https://wa.me/919769602777?text=" +
            encodeURIComponent(whatsappMessage),
            "_blank"
        );

    });

}

// Current Year
const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}

// Sticky Navbar
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "#17375E";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    } else {

        navbar.style.background = "rgba(255,255,255,.12)";
        navbar.style.boxShadow = "none";

    }

});
