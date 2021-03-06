// Capture regions that are fully enclosed
// Regions connected to boundaries can not be captured.

let board = [
	[1, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 1, 1, 0],
	[0, 0, 0, 0],
];

function surroundRegions(board) {
	if (!board.length) {
		return;
	}

	let numOfRows = board.length,
		numOfCols = board[0].length;

	// initialize visited container
	let visited = [];
	for (let i = 0; i < numOfRows; i++) {
		visited.push(new Array(numOfCols).fill(false, 0, numOfCols));
	}

	// check boundary columns
	for (let i = 0; i < board.length; i++) {
		// left-most col
		if (board[i][0] == 1 && !visited[i][0]) {
			console.log("1");
			markBoundaryRegion(i, 0, board, visited);
		}

		// right-most col
		if (board[i][board.length - 1] == 1 && !visited[i][board.length - 1]) {
			console.log("2");
			markBoundaryRegion(i, board.length - 1, board, visited);
		}
	}

	// check boundary rows
	for (let j = 0; j < board[0].length; j++) {
		// top-most row
		if (board[0][j] == 1 && !visited[0][j]) {
			console.log("3");
			markBoundaryRegion(0, j, board, visited);
		}
		// bottom-most row
		if (board[board.length - 1][j] == 1 && !visited[board.length - 1][j]) {
			console.log("4");
			markBoundaryRegion(board.length - 1, j, board, visited);
		}
	}

	// scan through all elements and flip values
	for (let i = 1; i < board.length - 1; i++) {
		for (let j = 1; j < board.length - 1; j++) {
			if (board[i][j] == 1 && !visited[i][j]) {
				board[i][j] = 0;
			}
		}
	}

	return board;
}

// bfs the boundry region
function markBoundaryRegion(i, j, board, visited) {
	let directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	let queue = [];
	queue.push([i, j]);
	visited[i][j] = true;
	let currentPosition, neighbor;

	// check neighbors and push onto queue
	while (queue.length) {
		currentPosition = queue.shift();
		for (const direction of directions) {
			neighbor = [
				currentPosition[0] + direction[0],
				currentPosition[1] + direction[1],
			];
			// neighbor = [i + direction[0], j + direction[1]];
			if (
				isFeasible(board, neighbor) &&
				!visited[neighbor[0]][neighbor[1]]
			) {
				visited[neighbor[0]][neighbor[1]] = true;
				queue.push(neighbor);
			}
		}
	}
}

function isFeasible(board, neighbor) {
	let x = neighbor[0],
		y = neighbor[1];

	return (
		x >= 0 &&
		x < board.length &&
		y >= 0 &&
		y < board[x].length &&
		board[x][y] == 1
	);
}

console.log(surroundRegions(board));
