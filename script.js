// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}

// ==========================
// STICKY NAVBAR
// ==========================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(!navbar) return;

if(window.scrollY>80){

navbar.style.background="#111";

navbar.style.padding="15px 8%";

}else{

navbar.style.background="rgba(0,0,0,.45)";

navbar.style.padding="18px 8%";

}

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// BOOKING FORM
// ==========================

const bookingForm=document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]').value;
const phone=this.querySelector('input[type="tel"]').value;
const date=this.querySelector('input[type="date"]').value;
const guests=this.querySelector('input[type="number"]').value;

const message=
`Hello Vandana's Villa!

New Booking Request

Name: ${name}
Phone: ${phone}
Date: ${date}
Guests: ${guests}`;

window.open(
"https://wa.me/919769602777?text="+encodeURIComponent(message),
"_blank"
);

});

}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ==========================
// GALLERY LIGHTBOX
// ==========================

const galleryImages=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`
<span id="closeLightbox">&times;</span>
<img id="lightboxImage">
`;

document.body.appendChild(lightbox);

const lightboxImage=document.getElementById("lightboxImage");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

});

});

document.getElementById("closeLightbox").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

// ==========================
// ACTIVE MENU
// ==========================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll("#nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// BACK TO TOP
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* Animation */

section{
opacity:0;
transform:translateY(40px);
transition:.8s;
}

section.visible{
opacity:1;
transform:translateY(0);
}

/* Mobile Menu */

#nav-links.show{
display:flex;
flex-direction:column;
position:absolute;
top:80px;
left:0;
width:100%;
background:#111;
padding:20px 0;
}

#nav-links.show li{
margin:15px 0;
text-align:center;
}

/* Active Menu */

#nav-links a.active{
color:#D4AF37;
}

/* Lightbox */

#lightbox{
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
justify-content:center;
align-items:center;
z-index:99999;
}

#lightbox img{
max-width:90%;
max-height:90%;
border-radius:15px;
}

#closeLightbox{
position:absolute;
top:20px;
right:30px;
font-size:45px;
color:white;
cursor:pointer;
}

/* Back To Top */

#topBtn{
position:fixed;
bottom:170px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.25);
}
