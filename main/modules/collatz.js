/* Collatz Class
*
*  This class encapsulate Collatz Algorithm and the structure
*  to build and handle a Tree a list of Branches;
*/
function Collatz() {
	// A Tree with its Branches
	this.tree = new Tree();

	// A branch to handle current event
	this.branch = new Branch(new Colour(4.0, 2.0, 2.0));

	/* Collatz Algorithm
    *
    *  This method is recursive since no matter what is the 
    *  value of n the sequence will always reach 1.
    *
    */

	this.calc = (n) => {
		if (n == undefined) {
			return;
		}
		// Adds a new integer to current branch;
		this.branch.set(n);
		// Checks if the algorithm has finished
		if (n == 1) {
			this.branch.value = this.branch.value.reverse();
			this.tree.set(this.branch);
			this.reset();
			return n;
		}

		// Collatz Algorithm with recursive calls
		if (n % 2 == 0) {
			return this.calc(n / 2);
		} else {
			return this.calc(3 * n + 1);
		}
	}

	// Resets the current branch
	this.reset = () => {
		this.branch = new Branch(new Colour(4.0, 2.0, 1.0));
	}
}
