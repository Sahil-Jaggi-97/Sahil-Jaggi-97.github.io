const text = 'Sahil Jaggi'; // <-- Your name or any phrase
const speed = 300; // Typing speed in ms
let index = 0;
const typewriterElement = document.getElementById('typewriter');
function typeWriter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
