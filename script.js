/* ==========================================
   ABISHEK SARAVANAN PORTFOLIO
   PREMIUM JS V2.0
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});



/* ==========================================
      CURSOR GLOW
========================================== */

const glow = document.querySelector(".cursor-glow");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

});



/* ==========================================
      SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = percent + "%";

});



/* ==========================================
      ACTIVE NAVIGATION
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        if (window.scrollY >= top) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ==========================================
      MOBILE MENU
========================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

});



/* ==========================================
      SMOOTH NAVIGATION
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document
.querySelector(
this.getAttribute("href")
)

.scrollIntoView({

behavior:"smooth"

});

navMenu.classList.remove("show-menu");

});

});



console.log(
"🔥 JS Part 1 Loaded Successfully"
);
/* ==========================================
      TYPING EFFECT
========================================== */

const roles = [

"Final Year AI & Data Science Student",

"Aspiring Software Engineer",

"Frontend Developer",

"AI Enthusiast"

];

const typingText =
document.querySelector(".hero-right h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!typingText) return;

const current = roles[roleIndex];

if(!deleting){

typingText.textContent =
current.substring(0,charIndex);

charIndex++;

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1800);

return;

}

}

else{

typingText.textContent =
current.substring(0,charIndex);

charIndex--;

if(charIndex < 0){

deleting = false;

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

}

setTimeout(typeEffect,deleting?45:90);

}

typeEffect();



/* ==========================================
      SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".about-card,.profile-card,.service-card,.stat-card,.education-card,.skill-card,.achievement-card,.interest-card,.language-card,.resume-card,.contact-card"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



/* ==========================================
      STATS COUNTER
========================================== */

const counters =
document.querySelectorAll(".stat-card h1");

let started = false;

window.addEventListener("scroll",()=>{

const stats =
document.querySelector("#stats");

if(!stats) return;

const trigger =
stats.offsetTop - 400;

if(window.scrollY > trigger && !started){

started = true;

counters.forEach(counter=>{

const text =
counter.innerText.replace("+","");

if(isNaN(text)) return;

const target = Number(text);

let value = 0;

const speed = Math.max(1,target/80);

function update(){

value += speed;

if(value < target){

counter.innerText =

Math.floor(value)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText =

target+"+";

}

}

update();

});

}

});



/* ==========================================
      BACK TO TOP
========================================== */

const scrollTopBtn =

document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollTopBtn.style.opacity = "1";

scrollTopBtn.style.pointerEvents = "auto";

}

else{

scrollTopBtn.style.opacity = "0";

scrollTopBtn.style.pointerEvents = "none";

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



console.log("🚀 JS Part 2 Loaded");
/* ==========================================
      3D CARD TILT
========================================== */

const cards = document.querySelectorAll(

".about-card,.service-card,.education-card,.skill-card,.achievement-card,.interest-card,.language-card,.contact-card,.resume-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX =

-(y - rect.height/2)/15;

const rotateY =

(x - rect.width/2)/15;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";

});

});



/* ==========================================
      MAGNETIC BUTTONS
========================================== */

const buttons =

document.querySelectorAll(

".hero-buttons a,.resume-buttons a"

);

buttons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect =

button.getBoundingClientRect();

const x =

e.clientX - rect.left - rect.width/2;

const y =

e.clientY - rect.top - rect.height/2;

button.style.transform=

`translate(${x*0.18}px,${y*0.18}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});



/* ==========================================
      HERO PARALLAX
========================================== */

const profile =

document.querySelector(".hero-left img");

document.addEventListener("mousemove",(e)=>{

if(!profile) return;

const x =

(window.innerWidth/2-e.clientX)/35;

const y =

(window.innerHeight/2-e.clientY)/35;

profile.style.transform=

`translate(${x}px,${y}px)`;

});



/* ==========================================
      FLOATING BACKGROUND
========================================== */

const blur1 =

document.querySelector(".blur1");

const blur2 =

document.querySelector(".blur2");

const blur3 =

document.querySelector(".blur3");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/70;

const y=e.clientY/70;

if(blur1){

blur1.style.transform=

`translate(${x}px,${y}px)`;

}

if(blur2){

blur2.style.transform=

`translate(${-x}px,${-y}px)`;

}

if(blur3){

blur3.style.transform=

`translate(${x/2}px,${-y/2}px)`;

}

});



/* ==========================================
      NAVBAR SHRINK
========================================== */

const header =

document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.padding="0";

header.style.background=

"rgba(5,8,22,.92)";

}

else{

header.style.background=

"rgba(5,8,22,.75)";

}

});



/* ==========================================
      SOCIAL HOVER
========================================== */

document.querySelectorAll(

".social-links a"

).forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-5px)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0)";

});

});



/* ==========================================
      PRELOAD IMAGES
========================================== */

window.addEventListener("load",()=>{

document.querySelectorAll("img").forEach(img=>{

const image = new Image();

image.src = img.src;

});

});



console.log("🔥 Premium Portfolio Ready!");