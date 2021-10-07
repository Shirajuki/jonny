const canvas = document.getElementById("wave");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const HEIGHT = canvas.height,
    WIDTH = canvas.width;
  const waves = [
    {
      x: Math.floor(Math.random() * 1000),
      dx: 1,
      y: 1,
      color: "rgba(133, 110, 255,0.4)",
    },
    {
      x: Math.floor(Math.random() * 1000),
      dx: 0.5,
      y: 1,
      color: "rgba(55, 37, 145,0.6)",
    },
    {
      x: Math.floor(Math.random() * 1000),
      dx: 0.1,
      y: 1,
      color: "rgba(108, 83, 233,1)",
    },
  ];
  const drawWave = (ctx, xo, yo, fs) => {
    let x = 0,
      y = 0,
      a = 17,
      f = 45;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = fs;
    while (x < WIDTH + 10) {
      y = HEIGHT / 2 - yo * 2 + a * Math.sin((x + xo) / f);
      ctx.lineTo(x, y);
      x += 100;
    }
    ctx.lineTo(x, 200);
    ctx.lineTo(0, 200);
    ctx.fill();
  };
  const draw = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT), ctx.save(), ctx.translate(0, 15);
    for (let l = waves.length - 1, i = l; i >= 0; i--) {
      const wave = waves[i];
      drawWave(ctx, wave.x, wave.y, wave.color);
      wave.x += wave.dx;
    }
    ctx.restore();
    window.requestAnimationFrame(draw);
  };
  draw();
}
export default {};
