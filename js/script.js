// ===========================================
// TREY MAVRIK OFFICIAL WEBSITE
// File: js/script.js
// Type: JavaScript
// ===========================================


// =============================
// Smooth Navigation
// =============================

document.querySelectorAll('nav a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// =============================
// Header Effect
// =============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


// =============================
// Reveal Sections
// =============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=".8s ease";

observer.observe(section);

});


// =============================
// Active Navigation
// =============================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =============================
// Back To Top Button
// =============================

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>500){

backToTop.style.opacity="1";

backToTop.style.pointerEvents="auto";

}else{

backToTop.style.opacity="0";

backToTop.style.pointerEvents="none";

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


// =============================
// YouTube Video
// =============================

function addVideo(videoID){

const container=document.getElementById("videoContainer");

if(!container) return;

container.innerHTML=`
<iframe
src="https://www.youtube.com/embed/${videoID}"
loading="lazy"
allowfullscreen>
</iframe>
`;

}

// Replace this with your own YouTube video ID
// Example: dQw4w9WgXcQ

// addVideo("YOUR_VIDEO_ID");


// =============================
// Concerts
// =============================

const concertContainer=document.getElementById("concertContainer");

const concerts=[];

function renderConcerts(){

if(!concertContainer) return;

if(concerts.length===0){

concertContainer.innerHTML="<p>New concert dates coming soon.</p>";

return;

}

}


// =============================
// Footer Year
// =============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Trey Mavrik. All Rights Reserved.`;

}


// =============================
// Website Loaded
// =============================

console.log("TREY MAVRIK Official Website Loaded");
