// Create an angular application called "sortApp"
var app = angular.module('sortApp', []);


// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables
    app.controller('mainController', function($scope, $http) {
        $http.get('data/salaries.json').then(function(response){
        	$scope.orderType = 'name';
        	console.log(response);
            

            $scope.people = response;
        });
    });
	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results
