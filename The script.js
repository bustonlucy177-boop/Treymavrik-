// ======================================
// TREY MAVRIK OFFICIAL WEBSITE
// File: js/script.js
// Part 5
// Videos • Concerts • Buttons
// ======================================

// ----------------------------
// YouTube Video Embed
// ----------------------------

function getYoutubeID(url){

    const regExp =
    /^(?:.*(?:youtu\.be\/|watch\?v=|embed\/))([^#&?\n]{11}).*/;

    const match = url.match(regExp);

    return match ? match[1] : null;

}

function loadVideo(url){

    const id = getYoutubeID(url);

    if(!id) return;

    const container = document.getElementById("videoContainer");

    if(!container) return;

    container.innerHTML = "";

    const iframe = document.createElement("iframe");

    iframe.src = "https://www.youtube.com/embed/" + id;

    iframe.allowFullscreen = true;

    iframe.loading = "lazy";

    container.appendChild(iframe);

}

// Replace this with your own YouTube link later.
loadVideo("https://www.youtube.com/watch?v=dQw4w9WgXcQ");


// ----------------------------
// Concert Section
// ----------------------------

const concerts = [];

function renderConcerts(){

    const container =
    document.getElementById("concertContainer");

    if(!container) return;

    container.innerHTML = "";

    if(concerts.length === 0){

        container.innerHTML =
        "<p>New concert dates coming soon.</p>";

        return;

    }

    concerts.forEach(show=>{

        const card = document.createElement("div");

        card.className = "concert-card";

        card.innerHTML = `

            <div class="concert-date">${show.date}</div>

            <div class="concert-location">${show.city}</div>

            <div>${show.venue}</div>

        `;

        container.appendChild(card);

    });

}

renderConcerts();


// ----------------------------
// Listen Now Buttons
// ----------------------------

document.querySelectorAll(".button").forEach(button=>{

    button.addEventListener("click",(event)=>{

        const link = button.getAttribute("href");

        if(link === "#"){

            event.preventDefault();

            alert("Replace this button with your latest music link.");

        }

    });

});


// ----------------------------
// Streaming Platforms
// ----------------------------

document.querySelectorAll(".streaming-grid a").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-5px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ----------------------------
// Images Fade In
// ----------------------------

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("load",()=>{

        img.style.opacity = "1";

        img.style.transition = "opacity .8s ease";

    });

});


// ----------------------------
// Hero Animation
// ----------------------------

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.opacity = "0";

        hero.style.transform = "translateY(30px)";

        setTimeout(()=>{

            hero.style.transition = "all 1s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        },200);

    }

});


// ======================================

// ======================================
