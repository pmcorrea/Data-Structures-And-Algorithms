// Problem Statement:
//You are given a list of projects and a list of dependencies (which is a list of pairs of projects,wherethesecondprojectisdependentonthefirstproject).Allofaproject'sdependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

// Proposed Solution:
//
let projectsArray = ["a", "b", "c", "d", "e", "f"];
let dependenciesArray = [
	["a", "d"],
	["f", "b"],
	// ["a", "f"], // cycle
	["b", "d"],
	["f", "a"],
	["d", "c"],
];

let buildOrder = (
	projects,
	dependencies,
	adj = {},
	discovered = new Set(),
	path = new Set(),
	result = []
) => {
	for (project of projects) {
		adj[project] = [];
	}

	for (pair of dependencies) {
		adj[pair[1]].push(pair[0]);
	}

	for (project of projects) {
		topologicalSort(project, adj, discovered, path, result);
	}

	return result;
};

function topologicalSort(project, adj, discovered, path, result) {
	if (discovered.has(project)) {
		return;
	}

	discovered.add(project);
	path.add(project);

	for (neighbor of adj[project]) {
		if (path.has(neighbor)) {
			throw new Error("Cycle detected");
		}
		topologicalSort(neighbor, adj, discovered, path, result);
	}

	path.delete(project);
	result.push(project);
}

// Test
console.log(buildOrder(projectsArray, dependenciesArray)); // result

// Notes after implementing:
//
