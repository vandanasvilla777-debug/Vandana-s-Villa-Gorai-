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
/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
<div class="lightbox-content">
    <span class="close-lightbox">&times;</span>
    <img src="" alt="">
</div>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.ceil(target/120);

function update(){

count+=speed;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year=document.getElementById("year");

if(year){

year.innerText=new Date().getFullYear();

}

/* ==========================================
   IMAGE LAZY EFFECT
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});

/* ==========================================
   DISABLE IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/* ==========================================
   PRELOAD HERO IMAGE
========================================== */

const preload=new Image();

preload.src="images/hero.jpg";
/* ==========================================
   WHATSAPP BOOKING FORM
========================================== */

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

📅 Check-in: ${date}

👥 Guests: ${guests}

📝 Message:
${message}

Website:
Vandana's Villa`;

const url =
`https://wa.me/919769602777?text=${encodeURIComponent(whatsappMessage)}`;

window.open(url, "_blank");

bookingForm.reset();

});

}

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});

/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero");

if (hero) {

hero.style.backgroundPositionY =
window.pageYOffset * 0.4 + "px";

}

});

/* ==========================================
   FADE ANIMATION
========================================== */

const fadeElements =
document.querySelectorAll("section");

const fadeObserver =
new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.animate(

[
{
opacity:0,
transform:"translateY(50px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:900,
fill:"forwards"
}

);

}

});

},{
threshold:0.15
});

fadeElements.forEach(section => {

fadeObserver.observe(section);

});

/* ==========================================
   RIPPLE EFFECT ON BUTTON
========================================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";

circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ==========================================
   HIDE MOBILE MENU AFTER RESIZE
========================================== */

window.addEventListener("resize",()=>{

if(window.innerWidth>768){

document.getElementById("nav-links")
.classList.remove("show");

}

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"%c🏡 Welcome to Vandana's Villa",
"color:#D4AF37;font-size:22px;font-weight:bold;"
);

console.log(
"%cDesigned by CK's Limited",
"color:#111;font-size:15px;"
);

/* ==========================================
   END OF SCRIPT
========================================== */
