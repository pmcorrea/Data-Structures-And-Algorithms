// Given an array of distinct integers, find all valid sets of four numbers that sum to a target sum.

// Time: n^2 (worst: n^3)
// Space: n^2
function fourNumberSum(array, targetSum) {
	// 	Generate distinct sets of quads
	// 	Be mindful to not double count elements in a set
	// 	Be mindful that multiple pairs can generate the same sum
	// 	Thus, the map should hold an array of arrays.

	// loop i-j generates pairs of and determines if we have a compliment sum in the map
	// loop k, i generates compliment pairs to be check agaist the next iteration of loop i-j

	let map = new Map();
	let results = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			let sum = array[i] + array[j];
			let compliment = targetSum - sum;

			if (map.has(compliment)) {
				for (pair of map.get(compliment)) {
					results.push([array[i], array[j], pair[0], pair[1]]);
				}
			}
		}

		for (let k = 0; k < i; k++) {
			let sum = array[k] + array[i];
			if (map.has(sum)) {
				let currentVal = map.get(sum);
				currentVal.push([array[k], array[i]]);
				map.set(sum, currentVal);
			} else {
				map.set(sum, [[array[k], array[i]]]);
			}
		}
	}

	return results;
}
