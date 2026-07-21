// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav');

    if (window.scrollY > 80) {
        nav.style.background = "#111";
    } else {
        nav.style.background = "rgba(0,0,0,.65)";
    }

});

// Fade-in Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});
// Dark Mode

document.getElementById("darkMode")

.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
