let minCoinChange = function (coins, sum) {
	function solveRecursive(coins, sum, currentIndex) {
		if (sum == 0) return 0;
		if (coins.length == 0 || currentIndex >= coins.length)
			return Number.MAX_VALUE;

		let set1 = Number.MAX_VALUE;

		if (coins[currentIndex] <= sum) {
			set1 = solveRecursive(
				coins,
				sum - coins[currentIndex],
				currentIndex
			);

			if (set1 != Number.MAX_VALUE) {
				set1 += 1;
			}
		}

		let set2 = solveRecursive(coins, sum, currentIndex + 1);

		return Math.min(set1, set2);
	}

	let result = solveRecursive(coins, sum, 0);
	return result == Number.MAX_VALUE ? -1 : result;
};

let minCoinChangeMemo = function (coins, sum) {
	let dp = [];

	function solveRecursive(coins, sum, currentIndex) {
		if (sum == 0) return 0;
		if (coins.length == 0 || currentIndex >= coins.length)
			return Number.MAX_VALUE;

		dp[currentIndex] = dp[currentIndex] || [];

		if (typeof dp[currentIndex][sum] == "undefined") {
			let set1 = Number.MAX_VALUE;

			if (coins[currentIndex] <= sum) {
				set1 = solveRecursive(
					coins,
					sum - coins[currentIndex],
					currentIndex
				);

				if (set1 != Number.MAX_VALUE) {
					set1 += 1;
				}
			}

			let set2 = solveRecursive(coins, sum, currentIndex + 1);
			dp[currentIndex][sum] = Math.min(set1, set2);
		}

		return dp[currentIndex][sum];
	}

	let result = solveRecursive(coins, sum, 0);
	return result == Number.MAX_VALUE ? -1 : result;
};

let minCoinChangeDp = function (coins, sum) {
	let n = coins.length;
	let dp = Array(n)
		.fill(0)
		.map(() => Array(sum + 1).fill(0));

	for (let i = 0; i < n; i++) {
		for (let s = 0; s <= sum; s++) {
			dp[i][s] = Number.MAX_VALUE;
		}
	}

	for (let i = 0; i < n; i++) {
		dp[i][0] = 0;
	}

	for (let i = 0; i < n; i++) {
		for (let s = 1; s <= sum; s++) {
			if (i > 0) {
				dp[i][s] = dp[i - 1][s];
			}

			if (coins[i] <= s) {
				dp[i][s] = Math.min(dp[i][s], dp[i][s - coins[i]] + 1);
			}
		}
	}

	return dp[n - 1][sum] === Number.MAX_VALUE ? -1 : dp[n - 1][sum];
};

console.log(
	`Number of ways to make change: ---> ${minCoinChangeDp([1, 2, 3], 5)}`
);
console.log(
	`Number of ways to make change: ---> ${minCoinChangeDp([1, 2, 3], 11)}`
);
console.log(
	`Number of ways to make change: ---> ${minCoinChangeDp([1, 2, 3], 7)}`
);
console.log(
	`Number of ways to make change: ---> ${minCoinChangeDp([3, 5], 7)}`
);
