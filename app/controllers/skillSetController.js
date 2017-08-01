

app.controller('skillSetController', function($scope) {

//PlaceHolders and Initial values

    $scope.outputTitle = "Select a Skillset";

    $scope.outputDiv1 = "";
    $scope.outputDiv2 = "";
    $scope.outputDiv3 = "";

//onClick functions for SkillSet navBar
    $scope.javaClick = function () {
            $scope.outputTitle = $scope.javaTitle;
            // for (var g=1; g<=$scope.javaTitle.length();) {
            //     ("$scope.outputDiv" + "1" 
            // }
            $scope.outputDiv1 = $scope.java1;
            $scope.outputDiv2 = $scope.java2;
            $scope.outputDiv3 = $scope.java3;
        }

    $scope.webClick = function () {
            $scope.outputTitle = $scope.webTitle;

            $scope.outputDiv1 = $scope.web1;
            $scope.outputDiv2 = $scope.web2;
            $scope.outputDiv3 = $scope.web3;
        }

    $scope.linuxClick = function () {
            $scope.outputTitle = $scope.linuxTitle;

            $scope.outputDiv1 = $scope.linux1;
            $scope.outputDiv2 = $scope.linux2;
            $scope.outputDiv3 = $scope.linux3;
        }

    $scope.otherClick = function () {
            $scope.outputTitle = $scope.otherTitle;

            $scope.outputDiv1 = $scope.other1;
            $scope.outputDiv2 = $scope.other2;
            $scope.outputDiv3 = $scope.other3;
        }

// Titles 
    $scope.javaTitle = "Java";
    $scope.webTitle = "Web";
    $scope.linuxTitle = "Unix/Linux";
    $scope.otherTitle = "Other";

// Java Lists
    $scope.java1 = [
        "Java",
        "SQL",
        "RCP",
        "Spring",
        "Struts"
    ];
    $scope.java2 = [
        "OracleDB",
        "Oracle SQL Developer",
        "SVN",
        "JDBC",
        "Java Servlet"
    ];
    $scope.java3 = [
        "Eclipse",
        "Ant",
        "Maven",
        "Jenkins",
        "Apache Tomcat"
    ];


// Web Lists
    $scope.web1 = [
        "HTML",
        "Javascript",
        "Typescript",
        "CSS",
        "Sass"
    ];
    $scope.web2 = [
        "AngularJS",
        "Angular2",
        "NodeJS",
        "Bootstrap",
        "JQuery"
    ];

    $scope.web3 = [
        "JSON",
        "MongoDB",
        "ExpressJS",
        "Jade/Pug",
        "AJAX"
    ];


// Linux Lists
    $scope.linux1 = [
        "C/C++",
        "Linux CLI",
        "Bash/scripting"
    ];
    $scope.linux2 = [
        "Putty",
        "CGI",
        "TCP/IP"
    ];
    $scope.linux3 = [
        "HTTP",
        "Git",
        "Ubuntu"
    ];


// Other Lists
    $scope.other1 = [
        "Python",
        "C#",
        "PHP",
        "Putty",
        "MySQL Workbench"
    ];
    $scope.other2 = [
        "Test driven development",
        "Unit testing",
        "Agile/Scrum methodologies",
        "REST",
        "SaaS"
    ];
    $scope.other3 = [
        "Windows CMD",
        "Intermidiate level Spanish",
        "Intermidiate level Arabic",
        "PADI SCUBA Certified"
    ];

});
