// Triple Step: A child is running up a staircase with n steps and
// can hop either 1 step, 2 steps, or 3 steps at a time.
// Implement a method to count how many possible ways the child can run up the stairs.

let tripleStep = (steps, memo = {}) => {
	if (steps == 0) {
		return 1;
	} else if (steps < 0) {
		return 0;
	}

	if (memo[steps] == null) {
		let sum =
			tripleStep(steps - 1, memo) +
			tripleStep(steps - 2, memo) +
			tripleStep(steps - 3, memo);
		memo[steps] = sum;
	}

	return memo[steps];
};

console.log(tripleStep(10));
