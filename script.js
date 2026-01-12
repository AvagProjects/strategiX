// ===== Dynamic Marketing Text =====
const marketingText = document.getElementById("marketing-text");
const words = ["Trust", "Strategy", "Creativity", "Innovation", "Design", "Growth"];
let index = 0;

function changeWord() {
  marketingText.textContent = `Marketing is ${words[index]}`;
  index = (index + 1) % words.length;
}
setInterval(changeWord, 2000);

// ===== Scroll Fade-In Animation =====
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show"); // optional, removes effect if scrolling back up
    }
  });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("loa  d", checkFadeIn);
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch(event.target.action, {
    method: event.target.method,
    body: formData,
    headers: {
      Accept: "application/json"
    }
  }).then((response) => {
    if (response.ok) {
      event.target.reset();
    } else {
      alert("Error saving comment.");
    }
  });
});