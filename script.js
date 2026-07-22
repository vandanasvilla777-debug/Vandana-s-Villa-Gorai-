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
// ===========================================
// WHATSAPP BOOKING FORM
// ===========================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const name = bookingForm.querySelector('input[type="text"]').value;

const phone = bookingForm.querySelector('input[type="tel"]').value;

const email = bookingForm.querySelector('input[type="email"]').value;

const date = bookingForm.querySelector('input[type="date"]').value;

const guests = bookingForm.querySelector('input[type="number"]').value;

const message = bookingForm.querySelector("textarea").value;

const whatsappMessage =

`🏡 *Vandana's Villa Booking Request*

👤 Name: ${name}

📱 Mobile: ${phone}

📧 Email: ${email}

📅 Date: ${date}

👥 Guests: ${guests}

📝 Message: ${message}`;

const url =
`https://wa.me/919769602777?text=${encodeURIComponent(whatsappMessage)}`;

window.open(url,"_blank");

bookingForm.reset();

});

}

// ===========================================
// HERO TEXT ANIMATION
// ===========================================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate([

{opacity:0,transform:"translateY(50px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards"

});

}

// ===========================================
// PARALLAX EFFECT
// ===========================================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=(window.scrollY*0.4)+"px";

}

});

// ===========================================
// IMAGE FADE EFFECT
// ===========================================

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("load",()=>{

img.style.opacity="1";

});

});

// ===========================================
// NUMBER COUNTER
// ===========================================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.ceil(target/100);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ===========================================
// SMOOTH BUTTON EFFECT
// ===========================================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// ===========================================
// CURRENT YEAR
// ===========================================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

// ===========================================
// PREVENT RIGHT CLICK (OPTIONAL)
// ===========================================

// document.addEventListener("contextmenu",e=>e.preventDefault());

// ===========================================
// DISABLE IMAGE DRAG
// ===========================================

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

// ===========================================
// CONSOLE MESSAGE
// ===========================================

console.log("%c🏡 Vandana's Villa","font-size:22px;color:#D4AF37;font-weight:bold");

console.log("Website Developed by CK's Limited");
