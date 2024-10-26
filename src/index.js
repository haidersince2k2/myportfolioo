import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const roles = [
  "MERN Stack Developer.",
  "Front End Developer.",
  "Back End Developer.",
  "React.js Developer.",
  "Django Developer.",
];
let index = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");
function type() {
  if (charIndex < roles[index].length) {
    roleElement.innerHTML += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed (milliseconds)
  } else setTimeout(deleteText, 1500); // Adjust pause before deleting (milliseconds)
}
function deleteText() {
  if (charIndex > 0) {
    roleElement.innerHTML = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50); // Adjust deleting speed (milliseconds)
  } else {
    index = (index + 1) % roles.length; // Move to the next role
    setTimeout(type, 500); // Pause before starting to type the next role
  }
}
// Start typing the first role
type();
// Network Animation
const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const nodes = [];
const edges = [];
const nodeCount = 100; // Number of nodes
// Create random nodes
for (let i = 0; i < nodeCount; i++)
  nodes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 5 + 2,
    color: "rgba(0, 255, 0, 0.7)",
    velocityX: Math.random() * 2 - 1,
    velocityY: Math.random() * 2 - 1,
  });
// Create edges between nodes
function createEdges() {
  edges.length = 0; // Clear edges
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = Math.sqrt(
        (nodes[i].x - nodes[j].x) ** 2 + (nodes[i].y - nodes[j].y) ** 2
      );
      if (distance < 100)
        // Adjust this value for edge length
        edges.push({
          from: nodes[i],
          to: nodes[j],
        });
    }
}
// Draw nodes and edges
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createEdges();
  // Draw edges
  ctx.strokeStyle = "rgba(0, 255, 0, 0.3)"; // Light green color for edges
  ctx.lineWidth = 1.5; // Slightly thicker lines for better visibility
  edges.forEach((edge) => {
    ctx.beginPath();
    ctx.moveTo(edge.from.x, edge.from.y);
    ctx.lineTo(edge.to.x, edge.to.y);
    ctx.stroke();
  });
  // Draw nodes
  nodes.forEach((node) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = node.color;
    ctx.fill();
  });
  // Move nodes
  nodes.forEach((node) => {
    node.x += node.velocityX;
    node.y += node.velocityY;
    // Bounce off the walls
    if (node.x < 0 || node.x > canvas.width) node.velocityX *= -1;
    if (node.y < 0 || node.y > canvas.height) node.velocityY *= -1;
  });
  requestAnimationFrame(draw);
}
// Start the animation
draw();
// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
document.addEventListener("DOMContentLoaded", function () {
  const knowMoreBtn = document.querySelector(".know-more-btn");
  knowMoreBtn.addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    // Gather form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    // Simulate sending the data (you can replace this with an actual API call)
    console.log("Form submitted", formData);
    // Optionally show a success message
    alert("Your message has been sent!");
    // Reset the form
    form.reset();
  });
});
