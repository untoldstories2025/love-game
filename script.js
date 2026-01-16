let step = 1;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const img = document.getElementById("img");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    showFinal();
});

noBtn.addEventListener("click", () => {
    step++;

    if (step === 2) {
        title.innerText = "Please think again! 😒";
        subtitle.innerText = "itni jaldi na matt bolo 🥺";
    }
    else if (step === 3) {
        title.innerText = "Ek aur baar soch lo! 🥹";
        subtitle.innerText = "kyu aisa kar rahi ho pls maan jao ❤️";
    }
    else if (step === 4) {
        title.innerText = "beautiful pls maan jao na! 😭";
        subtitle.innerText = "itna code likh waogi kya 💻";
    }
    else if (step >= 5) {
        title.innerText = "Try clicking NO 😏";
        subtitle.innerText = "but you can't 😜";
        enableMovingNo();
    }
});

function enableMovingNo() {
    noBtn.addEventListener("mouseenter", moveNoButton);
}

function moveNoButton() {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";
}

function showFinal() {
    title.innerText = "I knew it! You love me a lot 🥰";
    subtitle.innerText = "Mission Successful ❤️";
    noBtn.style.display = "none";
}
