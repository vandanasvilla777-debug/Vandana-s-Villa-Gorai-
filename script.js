const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  topBtn.style.display=window.scrollY>500?"block":"none";
});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();
