// ======================================
// TREY MAVRIK OFFICIAL WEBSITE
// File: js/script.js
// Part 4
// ======================================

// ----------------------------
// Smooth Navigation Scroll
// ----------------------------

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ----------------------------
// Header Scroll Effect
// ----------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// ----------------------------
// Reveal Sections
// ----------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    observer.observe(section);

});

// ----------------------------
// Active Navigation
// ----------------------------

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ----------------------------
// Back To Top Button
// ----------------------------

const backToTop = document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

backToTop.style.opacity="1";
backToTop.style.pointerEvents="auto";

}else{

backToTop.style.opacity="0";
backToTop.style.pointerEvents="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ----------------------------
// Current Year
// ----------------------------

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Trey Mavrik. All Rights Reserved.`;

}

// ----------------------------
// Website Loaded
// ----------------------------

console.log("TREY MAVRIK Website Loaded Successfully");
