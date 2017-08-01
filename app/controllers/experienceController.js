app.controller('experienceController', function($scope) {


	$scope.outputTitle = "Select Job Title";

	$scope.outputDiv1 = "";
    $scope.outputDiv2 = "";
    $scope.outputDiv3 = "";

	$scope.cimAceClick = function () {
            $scope.outputTitle = $scope.cimAceTitle;
            // for (var g=1; g<=$scope.javaTitle.length();) {
            //     ("$scope.outputDiv" + "1" 
            // }
            $scope.outputDiv1 = $scope.cimAce1;
            $scope.outputDiv2 = $scope.cimAce2;
            $scope.outputDiv3 = $scope.cimAce3;
        }

    $scope.oRClick = function () {
            $scope.outputTitle = $scope.oRTitle;

            $scope.outputDiv1 = $scope.oR1;
            $scope.outputDiv2 = $scope.oR2;
            $scope.outputDiv3 = $scope.oR3;
        }

    $scope.teamLeadClick = function () {
            $scope.outputTitle = $scope.teamLeadTitle;

            $scope.outputDiv1 = $scope.teamLead1;
            $scope.outputDiv2 = $scope.teamLead2;
            $scope.outputDiv3 = $scope.teamLead3;
        }

    $scope.undAsstClick = function () {
            $scope.outputTitle = $scope.undAsstTitle;

            $scope.outputDiv1 = $scope.undAsst1;
            $scope.outputDiv2 = $scope.undAsst2;
            $scope.outputDiv3 = $scope.undAsst3;
        }

//Titles
    $scope.fedExTitle="FedEx.";
	$scope.uOTitle="University of Oregon.";

    $scope.cimAceTitle = "CIM-US-ACE";
    $scope.oRTitle = "MC/OR";
    $scope.teamLeadTitle = "Team Lead";
    $scope.undAsstTitle = "Undergraduate Asst";
        


	$scope.cimAce1 = "Front End Java Application Developer for CIM-US-ACE customs clearance application. Handles package customs clearance for all flights into and out of the United States.";
	$scope.cimAce2 = "Design, code, test, review, build/deploy, and maintain the CIM-US-ACE system. Technologies I commonly use are Java(RCP), SQL, XML, OracleDB, Linux CLI, Putty, and SVN/Jenkins";
	$scope.cimAce3 = "Common tasks I perform include creating and fixing the system's UI, designing and creating new system functionality, writing and integrating SQL queries, and building and deploying code changes.";

	$scope.oR1 = "Full stack Java Application Developer for our Manifest Correction(MC) and Operational Reporting(OR) systems. MC is responsible for correcting and updating routing information for all package movement. OR is used to gain visibility to these manifest corrections and all routing information.";
	$scope.oR2 = "Design, code, test, review, build/deploy, and maintain MC and OR systems. I am the lead backup for the system, and I am involved in full system maintenance. The technology stack is similar to CIM-US-ACE, but uses Java Servlet instead of Eclipse RCP.";
	$scope.oR3 = "Common tasks I perform are improving respective the systems' UIs, overseeing and running scheduled builds, coordinating developer activities, fixing system defects and improving functionality.";

	$scope.teamLead1 = "Organize and coordinate onshore and offshore activities. CIM-US-ACE team consists of two front end developers who are based offshore, and the OR team consists of one onshore and one offshore developer.";
	$scope.teamLead2 = "My responsibilities include assigning the team tasks, gathering and delivering their time estimations, resolving requirement questions between system Users(chief stakeholders), FedEx FTE's and offshore team, and assisting the team in dealing with any problems that arise.";
	$scope.teamLead3 = "Facilitate completion of onshore and offshore responsibilities, and review and build/deploy completed work.";
	
	$scope.undAsst1 = "Tutored CIS students. Primarily taught HTML, Javascript, CSS, and Python, as well as how to use git and ssh. I also helped students with whatever questions they had that were within my ability to answer.";
	$scope.undAsst2 = "Held lab hours and conducted lab sessions. Taught in group sessions as well as provided 1 on 1 instruction.";
	$scope.undAsst3 = "Graded exams and assignments.";
});