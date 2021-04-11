w;
h;
conjecture;

function setup() {
	w = document.body.clientWidth;
	h = document.body.clientHeight;

	createCanvas(w, h);
	translate(w / 2, h / 2);
	background(0);
    conjecture = new Conjecture(500, 32, w / 2, h / 2);

    conjecture.run();
}

// function draw() {
//     background(0);
//     const x = map(mouseX, 0, w, 1, 64);
//     conjecture = new Conjecture(50, x, w / 2, h / 2);

//     conjecture.run();
// }
