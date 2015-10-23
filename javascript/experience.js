
window.onload = init();

function init() {
}
function experience(input) {
	
	//reset the outputDiv
	$('outputDiv').innerHTML = "";

	if (input === "btn1") {
    	$('outputDiv').innerHTML = "Data modeling, relational models, normal form, concurrency control, SQL"; }
    if (input === "btn2") {
    	$('outputDiv').innerHTML = "Vignere, Public Key, Substitution, Rejewski cycles, Enigma."; }
	if (input === "btn3") {
    	$('outputDiv').innerHTML = "Work-environment simulation. Learned about specification,planning, design, iterations, stand-up meetings,developement, maintenance.";}
    if (input === "btn4") {
    	$('outputDiv').innerHTML = "Scope, environments, parameters, overloading, inheritance, interpreters."; }
    if (input === "btn5") {
    	$('outputDiv').innerHTML = "Linux environment, SSH connections, version control, memory management, makefiles, debugging."; }
    if (input === "btn6") {
    	$('outputDiv').innerHTML = "Interface design, user behavior, usability, modes."; }
    if (input === "btn7") {
    	$('outputDiv').innerHTML = "Kruskal's, Prim's, Bellman-Ford, shortest path algorithms, Djiktra's, Floyd-Warshall, greedy algorithms, task scheduling, dynamic programming."; }
    if (input === "btn8") {
    	$('outputDiv').innerHTML = "Loop invariants, ADT, linear data structures, trees, traversal, AVL, Red Black, heaps, sorting."; }
    if (input === "btn9") {
    	$('outputDiv').innerHTML = "Information storage (signed vs unsigned, floating point), machine language (x86/y86), processors, pipelining, caching, memory heirarchy."; }

    if (input === "btn10") {
    	$('outputDiv').innerHTML = "Discreet 1 and 2:   Sets, induction, logic, sequences, functions, relations, graph theory, permutations, combinations. "; }
    if (input === "btn11") {
    	$('outputDiv').innerHTML = "Linear 1 and 2:   Vector algebra, vector spaces, linear equations, dimension, linear dependence, determinants, eigenvalues."; }
    if (input === "btn12") {
    	$('outputDiv').innerHTML = "Statistics 1 and 2:   Estimation, Distributions, continuity, hypotheses testing, confidence intervals."; }
    if (input === "btn13") {
    	$('outputDiv').innerHTML = "Proof based course, number theory, continuity, power series, convergence, differentiation and integration."; }
}
// buttons

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var button5 = document.getElementById("btn5");
var button6 = document.getElementById("btn6");
var button7 = document.getElementById("btn7");
var button8 = document.getElementById("btn8");
var button9 = document.getElementById("btn9");
var button10 = document.getElementById("btn10");
var button11 = document.getElementById("btn11");
var button12 = document.getElementById("btn12");
var button13 = document.getElementById("btn13");

// onclick handlers

button1.onclick = function() {
        experience(document.getElementById('btn1').id); }
button2.onclick = function() {
        experience(document.getElementById('btn2').id); }
button3.onclick = function() {
        experience(document.getElementById('btn3').id); }
button4.onclick = function() {
        experience(document.getElementById('btn4').id); }
button5.onclick = function() {
        experience(document.getElementById('btn5').id); }
button6.onclick = function() {
        experience(document.getElementById('btn6').id); }
button7.onclick = function() {
        experience(document.getElementById('btn7').id); }
button8.onclick = function() {
        experience(document.getElementById('btn8').id); }
button9.onclick = function() {
        experience(document.getElementById('btn9').id); }
button10.onclick = function() {
        experience(document.getElementById('btn10').id); }
button11.onclick = function() {
        experience(document.getElementById('btn11').id); }
button12.onclick = function() {
        experience(document.getElementById('btn12').id); }
button13.onclick = function() {
        experience(document.getElementById('btn13').id); }