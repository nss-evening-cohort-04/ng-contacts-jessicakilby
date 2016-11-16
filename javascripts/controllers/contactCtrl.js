"use strict";

contact.controller("contactCtrl", function($scope){

	$scope.allContactView = function(){
		console.log("all the contacts here");
		$scope.showListView = true;
	};
	$scope.addContactView = function(){
		console.log("you want to add a contact");
		$scope.showListView = false;
	};
	$scope.submitContactBtn = function(){
		console.log("submit button for form");
	};

});

// main html view, where you can see contacts, needs ng-controller="contactCtrl"