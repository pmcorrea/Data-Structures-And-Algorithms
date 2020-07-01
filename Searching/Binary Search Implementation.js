class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(value) {
		this.root = new Node(value);
		this.size = 1;
	}

	size() {
		return this.size;
	}

	insert(value) {
		this.size++;

		let newNode = new Node(value);

		const searchTree = (node) => {
			// left
			if (value < node.value) {
				if (!node.left) {
					node.left = newNode;
				} else {
					searchTree(node.left);
				}
				// right
			} else if (value > node.value) {
				if (!node.right) {
					node.right = newNode;
				} else {
					searchTree(node.right);
				}
			}
		};

		searchTree(this.root);
	}

	min() {
		let current = this.root;

		while (current.left) {
			current = current.left;
		}

		return current.value;
	}

	max() {
		let current = this.root;

		while (current.right) {
			current = current.right;
		}

		return current.value;
	}

	minHeight() {
		let current = this.root;

		if (current == null) {
			return -1;
		}

		// dfs
		let left = this.minHeight(current.left);
		let right = this.minHeight(current.right);

		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	maxHeight() {
		let current = this.root;

		if (current == null) {
			return -1;
		}

		// dfs
		let left = this.maxHeight(current.left);
		let right = this.minHeight(current.right);

		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	isBalanced() {
		return this.maxHeight() - this.minHeight() <= 1;
	}

	contains(value) {
		let current = this.root;

		while (current) {
			if (value === current.value) {
				return true;
			}

			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			}
		}

		return false;
	}

	remove(val) {
		const removeNode = (current, value) => {
			if (current == null) {
				return null;
			}
			// if node is found
			if (value == current.value) {
				// node has no child
				if (current.left == null && current.right == null) {
					return null;
				}

				// node has no left child
				if (current.left == null) {
					return current.right;
				}

				// node has no right child
				if (current.right == null) {
					return current.left;
				}

				// node has both childs, go to right node, then find leftmost grandchild
				let leftmostGC = current.right;
				while (leftmostGC.left !== null) {
					leftmostGC = leftmostGC.left;
				}
				current.value = leftmostGC.value;
				// fix the right side
				current.right = removeNode(current.right, leftmostGC.value);
				return current;
			} else if (value < current.value) {
				current.left = removeNode(current.left, value);
				return current;
			} else {
				current.right = removeNode(current.right, value);
				return current;
			}
		};
		this.root = removeNode(this.root, val);
	}

	// Depth First Search - In Order
	// Left, Root, Right
	dfsInOrder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			result.push(node.value);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// Depth First Search - Pre Order
	// Root, Left, Right
	dfsPreOrder() {
		let result = [];

		const traverse = (node) => {
			result.push(node.value);

			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// Depth First Search - Post Order
	// Left, Right, Root
	dfsPostOrder() {
		let result = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);

			if (node.right) traverse(node.right);

			result.push(node.value);
		};

		traverse(this.root);

		return result;
	}

	// Breadth First Search - uses queue
	bfs() {
		let result = [];
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			let current = queue.shift();
			result.push(current.value);

			if (current.left) {
				queue.push(current.left);
			}

			if (current.right) {
				queue.push(current.right);
			}
		}

		return result;
	}

	minHeightBfs() {
		let result = 0;
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			// console.log(queue.length)
			let loops = queue.length;
			result += 1;

			for (let i = 0; i < loops; i++) {
				let current = queue.shift();

				if (current.left == null && current.right == null) {
					return result;
				}

				if (current.right) {
					queue.push(current.right);
				}

				if (current.left) {
					queue.push(current.left);
				}
			}
		}
	}
}

let someBST = new BST(9);
someBST.insert(17);
someBST.insert(4);
someBST.insert(3);
someBST.insert(6);
someBST.insert(22);
someBST.insert(5);
someBST.insert(7);
someBST.insert(20);
someBST.insert(1);
someBST.insert(21);

someBST.minHeightBfs();