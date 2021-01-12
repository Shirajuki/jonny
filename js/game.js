/* 
Med tanke på dette er øving 1 og at de fleste bare har nylig startet med webdesign og/eller javascript,
tenkte jeg først å ikke skrive noe så avansert. Variabel- og funksjonsnavn skal for det meste kunne gi ut hva kodene gjør.
*/
class GameBoard {
	constructor(type,domObj=undefined) {
	  this.height = 500;
	  this.width = 500;
	  this.typeBoard = type;
	  this.init();
	  // Eventhandlers for SVG
	  this.svgRects = [[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]];
	  if (this.typeBoard === 1) {
		for (let i = 0; i < 3; i++) {
			const ch = domObj.eq(i).children();
			for (let j = 0; j < 3; j++) {
				this.svgRects[i][j] = ch.eq(j);
				ch.eq(j).on('click', e => {
					if (!this.gameover) this.play(i,j);
				});
			}
		}
	  }
	}
	init() {
		this.gameover = false;
		this.board = [["","",""], ["","",""], ["","",""]];
		this.rects = [
			[{"x":210, "y": 45, "color":"white", "visible": false}, {"x":270, "y": 45, "color":"white", "visible": false}, {"x":330, "y": 45, "color":"white", "visible": false}],
			[{"x":210, "y": 105, "color":"white", "visible": false}, {"x":270, "y": 105, "color":"white", "visible": false}, {"x":330, "y": 105, "color":"white", "visible": false}],
			[{"x":210, "y": 165, "color":"white", "visible": false}, {"x":270, "y": 165, "color":"white", "visible": false}, {"x":330, "y": 165, "color":"white", "visible": false}],
	 	];
		this.turn = "O"
	}
	checkWin() {
		// Sjekker for horisontal
		for (let i = 0; i < 3; i++) {
			if (this.board[i][0] === this.turn && this.board[i][1] === this.turn && this.board[i][2] === this.turn) return true;
		}
		// Sjekker for vertikal
		for (let i = 0; i < 3; i++) {
			if (this.board[0][i] === this.turn && this.board[1][i] === this.turn && this.board[2][i] === this.turn) return true;
		}
		// Sjekker for skrått
		if (this.board[0][0] === this.turn && this.board[1][1] === this.turn && this.board[2][2] === this.turn ||
			this.board[0][2] === this.turn && this.board[1][1] === this.turn && this.board[2][0] === this.turn) return true;
		// Sjekker for uavgjort
		let full = 0;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				full += this.board[i][j] !== "" ? 1 : 0;
			}
		}
		return full === 9;
	}
	reset() {
		// Bruker Timeout for å få til en simpel gameover "animasjon"
		setTimeout(() => {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					const rect = this.rects[i][j];
					rect.color = "rgb(184, 235, 255)";
					if (this.typeBoard === 1) {
						this.svgRects[i][j].addClass('gameover');
					}
				}
			}
		},5);
		setTimeout(() => {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					const rect = this.rects[i][j];
					rect.visible = false;
					if (this.typeBoard === 1) {
						this.svgRects[i][j].removeClass();
					}
				}
			}
		},4200);
		setTimeout(() => this.init(),5000);
	}
	play(i,j) {
		if (this.board[i][j] === "") {
			this.board[i][j] = this.turn;
			if (this.typeBoard === 1) this.svgRects[i][j].addClass(this.turn === "O" ? 'circle' : 'cross');
			if (this.checkWin()) {
				this.gameover = true;
				this.reset();
			}
			this.turn = this.turn === "X" ? "O" : "X";
		} else {
			this.error(i,j);
		}
	}
	error(i,j) {
		if (this.typeBoard === 0) {
			this.rects[i][j].color = "red";
			setTimeout(() => this.rects[i][j].color = "white",100)
		} else {
			this.svgRects[i][j].addClass('error');
			setTimeout(() => this.svgRects[i][j].removeClass('error'),100)
		}
	}
	// Hover og klikk sjekk system for HTML5 Canvas
	events(rx,ry,isClick=false) {
		if (!this.gameover) {
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					const rect = this.rects[i][j];
					if (rx > rect.x && rx < rect.x+50 && ry > rect.y && ry < rect.y+50) {
						if (isClick) {
							this.play(i,j);
							rect.visible = true;
						} else {
							rect.color = "rgb(184, 235, 255)";
						}
					} else {
						rect.color = "white";
					}
				}
			}
		}
	}
}