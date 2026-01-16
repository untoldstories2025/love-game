let step = 1;

const gif = document.getElementById("gif");
function getRandomTeddy() {
    return teddyGifs[Math.floor(Math.random() * teddyGifs.length)];
}
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Cute GIFs
const teddyPack = {
    start: {
        name: "Love Teddy 🧸",
        gif: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
    },
    think: {
        name: "Thinking Teddy 🤔",
        gif: "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif"
    },
    sad: {
        name: "Sad Teddy 🥺",
        gif: "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif"
    },
    cry: {
        name: "Crying Teddy 😭",
        gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
    },
    tease: {
        name: "Naughty Teddy 😜",
        gif: "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
    },
    love: {
        name: "Happy Teddy ❤️",
        gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
    }
};
// 🚀 Preload all teddy GIFs so they load instantly
Object.values(teddyPack).forEach(teddy => {
    const img = new Image();
    img.src = teddy.gif;
});

// Initial Screen
loadScreen(
    teddyPack.start,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
);

yesBtn.addEventListener("click", () => {
    showFinal();
});

noBtn.addEventListener("click", () => {
    step++;

    if (step === 2) {
       loadScreen(
    teddyPack.think,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
        );

    }

    else if (step === 3) {
       loadScreen(
    teddyPack.sad,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
        );

    }

    else if (step === 4) {
       loadScreen(
    teddyPack.cry,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
        );
    }

    else if (step >= 5) {
        loadScreen(
    teddyPack.tease,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
        );

        activateNoEscape();
    }
});

const teddyName = document.getElementById("teddyName");

function loadScreen(teddy, heading, text) {
    gif.src = teddy.gif;
    teddyName.innerText = teddy.name;
    title.innerText = heading;
    subtitle.innerText = text;

    document.querySelector(".card").style.animation = "none";
    void document.querySelector(".card").offsetWidth;
    document.querySelector(".card").style.animation = "pop 0.5s ease";
}

function activateNoEscape() {
    noBtn.addEventListener("mouseenter", () => {
        noBtn.classList.add("jump");

        const box = document.querySelector(".card");
        const maxX = box.clientWidth - noBtn.offsetWidth;
        const maxY = box.clientHeight - noBtn.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        setTimeout(() => {
            noBtn.classList.remove("jump");
        }, 300);
    });
}


function showFinal() {
    
loadScreen(
    teddyPack.love,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
        );

    noBtn.style.display = "none";
}


// Floating hearts animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 800);








