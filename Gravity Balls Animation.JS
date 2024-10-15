const canvas = document.getElementById("gravityCanvas");
const ctx = canvas.getContext("2d");canvas.width = window.innerWidth;
canvas.height = window.innerHeight;class Ball {
constructor(x, y, dx, dy, radius, color) {
this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;
this.color = color;
}draw() {
ctx.beginPath();
ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
ctx.fillStyle = this.color;
ctx.fill();
ctx.closePath();
}update() {
if (this.y + this.radius + this.dy > canvas.height) {
this.dy = -this.dy * 0.8;
} else {
this.dy += 1;
}if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
this.dx = -this.dx * 0.8;
}this.x += this.dx;
this.y += this.dy;
this.draw();
}
}const balls = [];
function generateBalls(num) {
for (let i = 0; i < num; i++) {
const radius = Math.random() * 30 + 10;
const x = Math.random() * (canvas.width - radius * 2) + radius;
const y = Math.random() * (canvas.height - radius * 2) + radius;
const dx = (Math.random() - 0.5) * 8;
const dy = (Math.random() - 0.5) * 8;
const color = `hsl(${Math.random() * 360}, 70%, 60%)`;balls.push(new Ball(x, y, dx, dy, radius, color));
}
}function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
balls.forEach(ball => ball.update());
requestAnimationFrame(animate);
}generateBalls(30);
animate();window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
balls.length = 0;
generateBalls(30);
});

