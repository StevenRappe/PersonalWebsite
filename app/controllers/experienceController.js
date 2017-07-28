app.controller('experienceController', function($scope) {

	$scope.fedExLabel="FedEx.";
	$scope.uOLabel="University of Oregon.";


	$scope.FedEx1="CIM-US-ACE Desktop Application";
	$scope.fedExDetail1 = [
		"Front End Java Application Developer for CIM-US-ACE customs clearance application. Handles package customs clearance for all flights into and out of the United States.",
		"Design, code, test, review, build/deploy, and maintain the CIM-US-ACE system. Technologies I commonly use are Java(RCP), SQL, XML, OracleDB, Linux CLI, Putty, and SVN/Jenkins",
		"Common tasks I perform include creating and fixing the system's UI, designing and creating new system functionality, writing and integrating SQL queries, and building and deploying code changes."
	];

	$scope.FedEx2="MC/OR Web Applications";
	$scope.fedExDetail2 = [
		"Full stack Java Application Developer for our Manifest Correction(MC) and Operational Reporting(OR) systems. MC is responsible for correcting and updating routing information for all package movement. OR is used to gain visibility to these manifest corrections and all routing information.",
		"Design, code, test, review, build/deploy, and maintain MC and OR systems. I am the lead backup for the system, and I am involved in full system maintenance. The technology stack is similar to CIM-US-ACE, but uses Java Servlet instead of Eclipse RCP.",
		"Common tasks I perform are improving respective the systems' UIs, overseeing and running scheduled builds, coordinating developer activities, fixing system defects and improving functionality."
	];

	$scope.FedEx3="Team Lead";
	$scope.fedExDetail3 = [
		"Organize and coordinate onshore and offshore activities. CIM-US-ACE team consists of two front end developers who are based offshore, and the OR team consists of one onshore and one offshore developer.",
		"My responsibilities include assigning the team tasks, gathering and delivering their time estimations, resolving requirement questions between system Users(chief stakeholders), FedEx FTE's and offshore team, and assisting the team in dealing with any problems that arise.",
		"Facilitate completion of onshore and offshore responsibilities, and review and build/deploy completed work."
	];

	$scope.UnderAsst="Undergraduate Assistant";
	$scope.underAsstDetail1 = [
		"Tutored CIS students. Primarily taught HTML, Javascript, CSS, and Python, as well as how to use git and ssh. I also helped students with whatever questions they had that were within my ability to answer.",
		"Held lab hours and conducted lab sessions. Taught in group sessions as well as provided 1 on 1 instruction.",
		"Graded exams and assignments."
	];
});