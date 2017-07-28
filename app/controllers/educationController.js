app.controller('educationController', function($scope) {

	$scope.university="University of Oregon, 2015.";
	$scope.degreeType="Bachelor of Science";
	$scope.major="Mathematics and Computer Science";
	$scope.webDev="U of O Web Developement Club";
	$scope.scholarship="National Chapter and Oregon Chapter Special Forces Association Scholarships";

	$scope.highSchool="Cleveland High School, 2011";
	
 	$scope.oregonPicture='./app/media/oregon.png';
 	$scope.advancedCourses="Advanced Course List";
 	$scope.selectTitle="Select a Course:";
 	$scope.courseDesc="Course Description";
	
	$scope.items = [{ name: "Select a Course:", desc: ""},{ name: 'CIS- Algorithms', desc: "Kruskal's, Prim's, Bellman-Ford, shortest path algorithms, Djiktra's, Floyd-Warshall, greedy algorithms, task scheduling, dynamic programming." },{ name: 'CIS- C/C++ and Unix', desc: "Linux environment, SSH connections, version control, memory management, makefiles, debugging." },{ name: 'CIS- Computer Organization', desc: "Information storage (signed vs unsigned, floating point), machine language (x86/y86), processors, pipelining, caching, memory heirarchy." },{ name: 'CIS- Cryptography', desc: "Vignere, Public Key, Substitution, Rejewski cycles, Enigma." },{ name: 'CIS- Database Processing', desc: "Data modeling, relational models, normal form, concurrency control, SQL" },{ name: 'CIS- Data Structures', desc: "Loop invariants, ADT, linear data structures, trees, traversal, AVL, Red Black, heaps, sorting." },{ name: 'CIS- Programming Languages', desc: "Scope, environments, parameters, overloading, inheritance, interpreters." },{ name: 'CIS- Software Methodology', desc: "Work-environment simulation. Learned about specification,planning, design, iterations, stand-up meetings,developement, maintenance." },{ name: 'CIS- System Administration', desc: "Linux OS installation, scripting, file structure, graphical vs CL interfaces, Apache configuration/usage."},{ name: 'CIS- User Interfaces', desc: "Interface design, user behavior, usability, modes." },{ name: 'MATH- Discreet Mathematics', desc: "Discreet 1 and 2:   Sets, induction, logic, sequences, functions, relations, graph theory, permutations, combinations."},{ name: 'MATH- Linear Algebra', desc: "Linear 1 and 2:   Vector algebra, vector spaces, linear equations, dimension, linear dependence, determinants, eigenvalues."},{ name: 'MATH- Statistics', desc: "Statistics 1 and 2:   Estimation, Distributions, continuity, hypotheses testing, confidence intervals."},{ name: 'MATH- Elementary Analysis', desc: "Proof based course, number theory, continuity, power series, convergence, differentiation and integration."}];
});