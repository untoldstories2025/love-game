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
const teddyGifs = [
    "https://media.giphy.com/media/RhhV1f4gE2BYA/giphy.gif",
    "https://media.giphy.com/media/l4pTdcif9rriwCScI/giphy.gif",
    "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/8fen5OcbLmTcE/giphy.gif",
    "https://media.giphy.com/media/f9kT1bOeGdvEw/giphy.gif",
    "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
];


// Initial Screen
loadScreen(
    getRandomTeddy(),
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
            getRandomTeddy(),
            "Please think again! 😏",
            "I know you love me a little bit 😉"
        );
    }

    else if (step === 3) {
        loadScreen(
            getRandomTeddy(),
            "Ek aur baar soch lo! 🥹",
            "Itna jaldi mana mat karo please ❤️"
        );
    }

    else if (step === 4) {
        loadScreen(
            getRandomTeddy(),
            "Hottiee... maan jao na! 😭",
            "Kitna code likhwane ka iraada hai kya? 💻😂"
        );
    }

    else if (step >= 5) {
        loadScreen(
            getRandomTeddy(),
            "Try clicking NO 😜",
            "But I won’t let you say no 😈"
        );
        activateNoEscape();
    }
});

function loadScreen(image, heading, text) {
    gif.src = image;
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
        getRandomTeddy(),
        "I knew it! You love me a lot 😘",
        "I won again ❤️"
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





