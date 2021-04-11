/* Conjecture Function
*
*  This function is used to translate the output of the
*  Collatz function to drawable content.
*
*/
function Conjecture(count, angle, w, h) {
	this.collatz = new Collatz();
	this.count = count;
	this.angle = angle;
	this.w = w;
	this.h = h;

	/* feed() Method
    *
    *  This method builds the Collatz Tree.
    *  
    */
	this.feed = () => {
		do {
			this.collatz.calc(this.count);
			this.count--;
		} while (this.count > 1);
		//console.log('Finished feeding Collatz Tree');
	};

	/* void run()
    *
    *  This method draws the Collatz Tree over the canvas.
    *  
    */
	this.run = () => {
		// This loop iterate the Tree arraylist of Branches
		for (let i = 0; i < this.collatz.tree.seed; i++) {
			// Gets the current branch
			branch = this.collatz.tree.value[i];

			// Gets the current range to map the values
			range = this.collatz.tree.seed * branch.seed;

			// Resets the drawing position to the initial value in order
			// to draw each branch starting from here.
			resetMatrix();
			translate(this.w, this.h);

			// This loop iterate the current Branch arraylist.
			for (let j = 0; j < branch.value.length; j++) {
				// Gets the branch color.
				c = branch.colour;

				// Gets the value of each Collatz iteration
				val = map(branch.value[j], 1, range / c.rand(12), 0, this.h);

				// Changes the angle of the canvas.
				// It uses the same Collatz Algorithm validation
				// to determine what is the next rotation angle to draw.
				if (val % 2 == 0) {
					rotate(Math.PI / c.rand(angle + 32));
				} else {
					rotate(-Math.PI / c.rand(angle));
				}

				// Updates the color of the stroke and draw lines over the canvas.
				strokeWeight(j / branch.seed * 2);
				stroke(c.r, c.g, c.b, c.rand(200));

				// It draws a line with the length of the current branch value
				line(0, 0, 0, -val);

				// This change the drawing position to the last value of the line.
				// This is done to keep moving across the canvas when working
				// with the current values of this branch.
				translate(0, -val);
			}
		}
	};

	this.feed();
}
