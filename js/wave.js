/* 
Med tanke på dette er øving 1 og at de fleste bare har nylig startet med webdesign og/eller javascript,
tenkte jeg først å ikke skrive noe så avansert. Variabel- og funksjonsnavn skal for det meste kunne gi ut hva kodene gjør.
*/
$(document).ready(function() {
	const canvas=$("#wave").get(0);
	if (canvas) {
		const ctx=canvas.getContext('2d');
		const HEIGHT=canvas.height, WIDTH=canvas.width;
		// Endring av x posisjon/hastigheten til bølgene per frame
		const dx = 1, dx2 = 0.5, dx3 = 0.1;
		const waves = [
			{"x":0, "dx":dx, "y":1, "color":"rgba(106, 152, 240,0.4)"},
			{"x":0, "dx":dx2, "y":1, "color":"rgba(73, 97, 220,0.6)"},
			{"x":0, "dx":dx3, "y":1, "color":"rgba(106, 152, 240,1)"}];
		function drawWave(ctx,xo,yo,fs) {
			let x=0,y=0,a=17,f=45;
			ctx.beginPath();
			ctx.lineWidth=1;
			ctx.fillStyle=fs;
			while (x < WIDTH+10) {
				y=HEIGHT/2-yo*2+a*Math.sin((x+xo)/f);
				ctx.lineTo(x, y);
				x+=1;
			}
			ctx.lineTo(x, 200);
			ctx.lineTo(0, 200);
			ctx.fill();
		}
		function draw() {
			ctx.clearRect(0,0,WIDTH,HEIGHT),ctx.save(),ctx.translate(0, 15);
			// Simpel sinus wave loop
			for (let l = waves.length-1, i = l; i >= 0; i--) {
				const wave=waves[i];
				drawWave(ctx,wave.x,wave.y,wave.color);
				wave.x+=wave.dx;
				// Effekt der bølgen går litt opp og ned
				if (wave.y>1.8) {
					wave.y=lerp(wave.y,-1,0.005);
				} else {
					wave.y=lerp(wave.y,2,0.005);;
				}
			}
			ctx.restore();
			window.requestAnimationFrame(draw);
		}
		draw();
	}
});
// Lineær interpolasjon, stykkevis endring for "opp og ned" effekt
function lerp(a, b, n) {
	return (1 - n) * a + n * b;
}