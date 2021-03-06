// Problem Statement:
// Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
/**
 * For node N:
 *   1. Where N.right DOES exists:
 *     a. If it has no left child then N.right is the successor.
 *     b. If it has a left child, then the left most child is the successor.
 *
 *   2. Where N.right child DOES NOT exists:
 *     a. If N is a left child then the successor is N.parent.
 *     b. Otherwise follow parent pointers until we find a node that is a left
 *     child of its parent, then the parent is the successor. */

const { inOrderTree } = require("./Sample Tree");
let succesor = (node) => {
	if (node.left) {
		while (node.left) {
			node = node.left;
		}
		return node;
	} else if (!node.left && node.right) {
		return node.right;
	} else if (node == node.parent.left) {
		return node.parent;
	} else if (node == node.parent.right) {
		while (node != node.parent.left) {
			node = node.parent;
			if (node.parent == null) {
				return "This is the last node";
			}
		}
		return node.parent;
	}

	return false;
};
// Test
console.log(succesor(inOrderTree)); // result

// Notes after implementing:
//
