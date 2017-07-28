app.controller('skillSetController', function($scope) {

    $scope.javaTitle = "Java";
    $scope.webTitle = "Web";
    $scope.linuxTitle = "Unix/Linux";
    $scope.otherTitle = "Other";

    $scope.javaStack = [
        "Java",
        "SQL",
        "RCP",
        "Spring",
        "Struts",
        "OracleDB",
        "Oracle SQL Developer",
        "SVN",
        "JDBC",
        "Java Servlet",
        "Eclipse",
        "Ant",
        "Maven",
        "Jenkins",
        "Apache Tomcat"
    ];

    $scope.webStack = [
        "HTML",
        "Javascript",
        "Typescript",
        "CSS",
        "SaaS",
        "AngularJS",
        "Angular2",
        "NodeJS",
        "Bootstrap",
        "JQuery",
        "JSON",
        "MongoDB",
        "ExpressJS",
        "Jade/Pug",
        "AJAX"
    ];

    $scope.linuxStack = [
        "C/C++",
        "Linux CLI",
        "Bash/scripting",
        "Putty",
        "CGI",
        "TCP/IP",
        "HTTP",
        "Git",
        "Ubuntu"
    ];
    
    $scope.otherSkills = [
        "Python",
        "C#",
        "REST",
        "Test driven development",
        "Unit testing",
        "Agile/Scrum methodologies",
        "Putty",
        "PHP",
        "Windows CMD",
        "MySQL Workbench",
        "Intermidiate level Spanish",
        "Intermidiate level Arabic",
        "PADI SCUBA Certified"
    ];
});
