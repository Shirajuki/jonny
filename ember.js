const minmax = (min, max) => Math.random() * (max - min) + min;
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxSize = Math.floor(Math.random() * 10) + 3;
    this.size = this.maxSize;
    this.vx = Math.random() * 1 - 0.5;
    this.vy = minmax(-0.5, -3.25);
    this.g = 0.001;
    this.maxLife = minmax(80, 150);
    this.life = this.maxLife;
  }
  draw(ctx) {
    this.x += this.vx;
    this.y += this.vy += this.g;
    this.life -= Math.random() * 2;
    this.size = (this.life / this.maxLife) * 0.9 * this.maxSize;
    ctx.beginPath();
    ctx.fillStyle = "#8b7bdf";
    ctx.shadowColor = "#c1b9ed";
    ctx.shadowBlur = 15;
    ctx.arc(this.x, this.y, this.size >= 0 ? this.size : 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

const canvas = document.getElementById("ember");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = Math.floor(window.innerHeight / 3.5);
  const particles = [];
  const offsetX = 300;
  const spawnParticle = () => {
    const x = Math.floor(
      Math.random() * (canvas.width - offsetX) + offsetX / 2
    );
    const y = Math.floor(canvas.height + Math.random() * 10 + 100);
    particles.push(new Particle(x, y));
  };
  setInterval(spawnParticle, 100);
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let l = particles.length - 1, i = l; i >= 0; i--) {
      const particle = particles[i];
      particle.draw(ctx);
      if (particle.y <= -10 || particle.life <= 0) particles.splice(i, 1);
    }
    window.requestAnimationFrame(draw);
  };
  window.requestAnimationFrame(draw);
}
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = Math.floor(window.innerHeight / 3);
});
export default {};
