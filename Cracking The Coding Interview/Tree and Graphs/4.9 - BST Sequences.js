// Problem Statement:
//A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
const { BSTree } = require("./Sample Tree");

function sequencesToCreateBST(tree) {
	if (!tree) {
		return null;
	}
	return sequencesRecursive(tree);
}

function sequencesRecursive(node) {
	if (!node) {
		return null;
	} else {
		let perms = permutations(
			sequencesRecursive(node.left),
			sequencesRecursive(node.right)
		);
		if (!perms) {
			perms = [[node.value]];
		} else {
			perms.forEach((p) => p.unshift(node.value));
		}
		return perms;
	}
}

function permutations(left, right) {
	// false, true -> true
	// false, false -> false
	// true, true -> else
	// if both are truthy enter else clause
	if (!left || !right) {
		return left || right;
	} else {
		let perms = [];
		for (let i = 0; i < left.length; ++i) {
			for (let j = 0; j < right.length; ++j) {
				perms.push.apply(
					perms,
					permutationsRecursive([], left[i], right[j], [], 0, 0)
				);
			}
		}
		return perms;
	}
}

function permutationsRecursive(perms, list1, list2, prefix, i, j) {
	// console.log(i, j);

	if (i === list1.length && j === list2.length) {
		console.log("base case", prefix.slice(0));
		perms.push(prefix.slice(0));
	} else {
		if (i < list1.length) {
			prefix.push(list1[i]);
			console.log("calling 1", i, j);
			permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
			prefix.pop();
		}

		if (j < list2.length) {
			prefix.push(list2[j]);
			console.log("calling 2", i, j);
			permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
			prefix.pop();
		}
	}

	return perms;
}

// Test
// console.log(sequencesToCreateBST(BSTree)); // result
console.log(permutationsRecursive([], [1, 2], [3, 4], [], 0, 0)); // result

// Notes after implementing:
//
