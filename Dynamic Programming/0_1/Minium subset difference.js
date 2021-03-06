// Problem Statement
// Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.

let minimumPartitionMemo = function (nums) {
	let memo = [];

	// we'll compare difference from the end of the array, working towards the beginning of the array
	function solveRecursion(nums, currentIndex, sum1, sum2) {
		if (currentIndex >= nums.length) return Math.abs(sum1 - sum2);

		memo[currentIndex] = memo[currentIndex] || [];

		// We can uniquely identify a sub-problem from ‘currentIndex’ and ‘Sum1’; as ‘Sum2’ will always be the sum of the remaining numbers.
		if (typeof memo[currentIndex][sum1] == "undefined") {
			let diff1 = solveRecursion(
				nums,
				currentIndex + 1,
				sum1 + nums[currentIndex],
				sum2
			);

			let diff2 = solveRecursion(
				nums,
				currentIndex + 1,
				sum1,
				sum2 + nums[currentIndex]
			);

			memo[currentIndex][sum1] = Math.min(diff1, diff2);
		}

		return memo[currentIndex][sum1];
	}

	return solveRecursion(nums, 0, 0, 0);
};

let minimumPartitionTab = function (nums) {
	let n = nums.length;

	// The lowest minimum we can reach is 0, which only occuers if we can construct two sets of equal value
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += nums[i];
	}

	let halfSum = Math.floor(sum / 2);

	let table = Array(n)
		.fill(false)
		.map(() => Array(halfSum + 1).fill(false));

	for (let i = 0; i < n; i++) {
		table[i][0] = true;
	}

	for (let s = 1; s <= halfSum; s++) {
		table[0][s] = nums[0] == s;
	}

	for (let i = 1; i < n; i++) {
		for (let s = 1; s <= halfSum; s++) {
			if (table[i - 1][s]) {
				table[i][s] = table[i - 1][s];
			} else if (nums[i] <= s) {
				table[i][s] = table[i - 1][s - nums[i]];
			}
		}
	}

	// we'll find the closest subset to hald the sum
	let sum1 = 0;
	for (let s = halfSum; s >= 0; s--) {
		if (table[n - 1][s] == true) {
			sum1 = s;
			break;
		}
	}

	// the complimentary set (sum2) is the difference between the total sum and sum1
	let sum2 = sum - sum1;
	return Math.abs(sum2 - sum1);
};

console.log(
	`Minimum subset difference is: ---> ${minimumPartitionTab([1, 2, 3, 9])}`
);
console.log(
	`Minimum subset difference is: ---> ${minimumPartitionTab([1, 2, 7, 1, 5])}`
);
console.log(
	`Minimum subset difference is: ---> ${minimumPartitionTab([1, 3, 100, 4])}`
);
