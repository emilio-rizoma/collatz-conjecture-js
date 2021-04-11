
function setup() {
	createCanvas(1200, 600);
	translate(600, 300);
	background(0);
	// Instance of Conjecture
	const col = new Conjecture(100, 2);
    col.run();
	
}
