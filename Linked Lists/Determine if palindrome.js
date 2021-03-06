const { Node, dbLinkedList } = require("./LinkedList.js");

class Stack {
	constructor(value) {
		this.head = null;
	}

	push(value) {
		let newNode = new Node(value);

		if (this.head == null) {
			this.head = newNode;
			return;
		}

		this.head.next = newNode;
		newNode.prev = this.head;
		this.head = this.head.next;
		return;
	}

	pop() {
		if (this.head.prev == null) {
			this.head = null;
			return;
		}

		this.head = this.head.prev;
		this.head.next = null;
		return;
	}
}

let ll = new dbLinkedList();

ll.append("Pedro");
ll.append("Peter");
ll.append("Michael");
ll.append("Peter");
ll.append("Pedro");

function isPalindrome(someLL) {
	let stack = new Stack();
	let current = someLL.head;

	// create stack
	while (current) {
		stack.push(current.value);
		current = current.next;
	}

	// attempt to empty stack
	current = someLL.head;
	while (current) {
		if (current.value == stack.head.value) {
			stack.pop();
		} else {
			break;
		}

		current = current.next;
	}

	// check stack for emptiness
	if (stack.head == null) {
		return true;
	}
	return false;
}

console.log(isPalindrome(ll));
