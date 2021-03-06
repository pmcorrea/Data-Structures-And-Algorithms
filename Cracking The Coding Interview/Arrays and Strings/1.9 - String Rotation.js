// Problem Statement:
//		Assume you have a method isSubstring which checks if one word is a substring of another.
// 		Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to
// 		isSubstring.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//	("waterbottle", "erbottlewat") -> true
//	("waterbottle", "watbottleer") -> false

// Proposed Solution:
//

let rotation = (s1, s2) => {
	if (s1.length != s2.length || s1.length == 0) return false;

	let s1s1 = s1 + s1;
	let result = isSubstring(s1s1, s2);
	return result;
};

// Test
console.log(rotation("waterbottle", " erbottlewat")); // true

// Notes after implementing:
//
