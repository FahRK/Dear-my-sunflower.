let current = 1;

function nextScreen() {
  document.getElementById(`screen${current}`).classList.remove("active");
  current++;
  document.getElementById(`screen${current}`).classList.add("active");
}

function sayYes() {
  document.getElementById("screen5").classList.remove("active");
  document.getElementById("screen6").classList.add("active");
  confettiHearts();
}

const maybeBtn = document.getElementById("maybeBtn");

maybeBtn.addEventListener("mouseover", moveButton);
maybeBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 160 - 80;
  maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
  maybeBtn.textContent = randomText();
}

function randomText() {
  const texts = [
    "แน่ใจหรอ 🥺",
    "กดเป็นเถอะ",
    "คิดอีกทีนะ",
    "พี่เขินแล้ว",
    "ปุ่มนี้ดื้อ"
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["🤍", "❤️", "🌻", "✨"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 450);

function confettiHearts() {
  for (let i = 0; i < 45; i++) {
    setTimeout(createHeart, i * 80);
  }
}
