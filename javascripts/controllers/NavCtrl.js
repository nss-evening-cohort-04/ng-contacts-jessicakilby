"use strict";

contact.controller("NavCtrl", function($scope){

	$scope.navLinks = [{title:"link1"},{title:"link2"}];

	$scope.navHomeLink = function(){
		console.log("navigation brand clicked");
	};
	$scope.navLinkClick = function(){
		console.log("navLink clicked");
	};


});

//Need html nav bar setup for ng-controller="NavCtrl"