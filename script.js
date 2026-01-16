let step = 1;

const gif = document.getElementById("gif");
const teddyName = document.getElementById("teddyName");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* 🧸 Teddy Pack */
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

/* ⚡ Preload GIFs */
Object.values(teddyPack).forEach(teddy => {
    const img = new Image();
    img.src = teddy.gif;
});

/* 🎬 Load Screen */
function loadScreen(teddy, heading, text) {
    gif.src = teddy.gif;
    teddyName.innerText = teddy.name;
    title.innerText = heading;
    subtitle.innerText = text;

    const card = document.querySelector(".card");
    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "pop 0.5s ease";
}

/* 🏃 NO Button Escape */
function activateNoEscape() {
    noBtn.onmouseenter = () => {
        const box = document.querySelector(".card");
        const maxX = box.clientWidth - noBtn.offsetWidth - 20;
        const maxY = box.clientHeight - noBtn.offsetHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    };
}

/* ❤️ Final Screen */
function showFinal() {
    loadScreen(
        teddyPack.love,
        "I knew it! You love me a lot 😘",
        "I won again ❤️"
    );
    noBtn.style.display = "none";
}

/* 👉 Button Events */
yesBtn.onclick = () => showFinal();

noBtn.onclick = () => {
    step++;

    if (step === 2) {
        loadScreen(
            teddyPack.think,
            "Please think again! 😏",
            "I know you love me a little bit 😉"
        );
    }

    else if (step === 3) {
        loadScreen(
            teddyPack.sad,
            "Ek aur baar soch lo! 🥹",
            "Itna jaldi mana mat karo please ❤️"
        );
    }

    else if (step === 4) {
        loadScreen(
            teddyPack.cry,
            "Hottiee... maan jao na! 😭",
            "Kitna code likhwane ka iraada hai kya? 💻😂"
        );
    }

    else if (step >= 5) {
        loadScreen(
            teddyPack.tease,
            "Try clicking NO 😜",
            "But I won’t let you say no 😈"
        );
        activateNoEscape();
    }
};

/* 🚀 Initial Screen */
loadScreen(
    teddyPack.start,
    "Do you love me? 🥰",
    "Your guggu made this page specially for you bubbu 💖"
);
