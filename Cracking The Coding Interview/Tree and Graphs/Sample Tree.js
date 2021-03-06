class Node {
	constructor(value, left, right, parent) {
		this.value = value;
		this.left = left;
		this.right = right;
		this.parent = parent;
	}
}

let node6B = new Node(1, null, null);
let node5B = new Node(1, null, null);
let node4B = new Node(1, node6B, null);
let node3B = new Node(1, null, null);
let node2B = new Node(1, null, node5B);
let node1B = new Node(1, node3B, node4B);
let sampleBalancedTree = new Node(1, node1B, node2B);

let node9U = new Node(9, null, null);
let node6U = new Node(1, null, node9U);
let node5U = new Node(1, null, null);
let node4U = new Node(1, node6U, null);
let node3U = new Node(1, null, null);
let node2U = new Node(1, null, node5U);
let node1U = new Node(1, node3U, node4U);
let sampleUnbalancedTree = new Node(1, node1U, node2U);

let node9inOrder = new Node(9, null, null, null);
let node8inOrder = new Node(8, null, null, null);
let node7inOrder = new Node(7, null, null, null);
let node6inOrder = new Node(6, null, null, null);
let inOrderTree = new Node(5, null, null, null);
let node4inOrder = new Node(4, null, null, null);
let node3inOrder = new Node(3, null, null, null);
let node2inOrder = new Node(2, null, null, null);
let node1inOrder = new Node(1, null, null, null);

// In Order Graph
// 				  5
// 			 /			\
// 			2			8
//		   /   \	  /	  \
// 		  1		4	 6 	   9
// 				/	\
// 				3	7

node9inOrder.parent = node8inOrder;
node8inOrder.parent = inOrderTree;
node8inOrder.right = node9inOrder;
node8inOrder.left = node6inOrder;
node7inOrder.parent = node6inOrder;
node1inOrder.parent = node2inOrder;
node2inOrder.left = node1inOrder;
node2inOrder.right = node4inOrder;
node2inOrder.parent = inOrderTree;
node3inOrder.parent = node4inOrder;
node4inOrder.left = node3inOrder;
node4inOrder.parent = node2inOrder;
inOrderTree.left = node2inOrder;
inOrderTree.right = node8inOrder;
node6inOrder.right = node7inOrder;
node6inOrder.parent = node8inOrder;

// Tiny graph
let tinyTree = new Node(1, null, null, null);
let tiny2 = new Node(2, null, null, null);
let tiny3 = new Node(3, null, null, null);

tiny2.parent = tinyTree;
tiny3.parent = tinyTree;
tinyTree.left = tiny2;
tinyTree.right = tiny3;

// BST
let BSTree = new Node(5, null, null, null);
let BSTNode3 = new Node(3, null, null, null);
let BSTNode7 = new Node(7, null, null, null);
let BSTNode2 = new Node(2, null, null, null);
let BSTNode4 = new Node(4, null, null, null);
let BSTNode9 = new Node(9, null, null, null);

BSTree.left = BSTNode3;
BSTree.right = BSTNode7;

BSTNode3.left = BSTNode2;
BSTNode3.right = BSTNode4;

// BSTNode7.right = BSTNode9;

module.exports = {
	sampleBalancedTree,
	sampleUnbalancedTree,
	inOrderTree,
	tinyTree,
	BSTree,
};
