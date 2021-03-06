// INPUT:  PAYPALISHIRING
// OUTPUT: PAHNAPLSIIGYIR

// P   A   H   N
// A P L S I I G
// Y   I   R

// INPUT:  PAYPALISHIRING
// OUTPUT: PINALSIGYAHRPI

// A cycle = No.Rows * 2 - 2
// second item = charIdx + cycleSize - 2 * rowIdx

//P     I      N
//A   L S   I  G
//Y A   H  R
//P     I

function sortByRow(s, numOfRows) {
	if (numOfRows == 1 || s.length <= numOfRows) {
		return s;
	}

	let rows = [];
	let result = [];
	let currentRow = 0;
	let direction = -1;

	// initialize rows
	for (let i = 0; i < numOfRows; i++) {
		rows.push([]);
	}

	// iterate rows and push char
	for (c of s) {
		rows[currentRow].push(c);

		// Change direction once the ends have been reached, else increment current position
		if (currentRow == 0 || currentRow == rows.length - 1) {
			direction *= -1;
		}

		currentRow += direction;
	}

	return result.concat(...rows).join("");
}

function visitByRow(s, numOfRows) {
	if (numOfRows == 1) {
		return s;
	}

	let result = [];
	let cycleSize = numOfRows * 2 - 2;

	for (let i = 0; i < numOfRows; i++) {
		for (let j = i; j < s.length; j += cycleSize) {
			result.push(s[j]);

			// Second item
			let k = j + cycleSize - 2 * i;

			if (i != 0 && i != numOfRows - 1 && k < s.length) {
				result.push(s[k]);
			}
		}
	}

	return result.join("");
}

console.log(sortByRow("PAYPALISHIRING", 3));
console.log(visitByRow("PAYPALISHIRING", 3));
