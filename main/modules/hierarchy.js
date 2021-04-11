/* Hierarchy Abstract Class
*
*  This class shows the structure to build heararchies
*/
// class Hierarchy<T> {
//     seed;
//     ArrayList<T> value;
//     function set(T);
//     seed = () => {};
//     ArrayList<T> value();
//   }

/* Tree Class
  *
  *  This class simulates a tree with branches inside
  */
function Tree() {
	this.seed = 0;
	this.value = [];

	this.set = (val) => {
		this.seed++;
		this.value.push(val);
	};
}

/* Branch Class
  *
  *  This class simulates a branch
  */
function Branch(colour) {
	this.seed = 0;
	this.value = [];
	this.colour = colour;

	this.set = (val) => {
		this.seed++;
		this.value.push(val);
	};
}

/* Colour Class
  *
  *  This class is an rgb object
  */
function Colour(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;

	this.init = () => {
		this.r = this.frac(r);
		this.g = this.frac(g);
		this.b = this.frac(b);
	};

	this.frac = (num) => {
		const val = Math.floor(255 * (1.0 / num));
		return this.rand(val);
	};

	this.rand = (max) => int(Math.random() * max) + 1;

	this.init();
}
