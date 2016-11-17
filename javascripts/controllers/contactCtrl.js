"use strict";

contact.controller("contactCtrl", function($scope, contactFactory){

	$scope.showListView = true;
	$scope.newContact = {};
	$scope.contacts = [];

	var getContacts = function(){
		contactFactory.getContactFB().then(function(contactsFB){
			console.log("items from fb", contactsFB);
			$scope.contacts = contactsFB;
		});
	};
	getContacts();

	$scope.allContactView = function(){
		console.log("all the contacts here");
		$scope.showListView = true;
	};
	$scope.addContactView = function(){
		console.log("you want to add a contact");
		$scope.showListView = false;
	};
	$scope.submitNewContact = function(){
		console.log("submit button for form");
		
	}; //not working

});

// main html view, where you can see contacts, needs ng-controller="contactCtrl"
//The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

//name: newContact.name,
// phone: newContact.phone,
// address: newContact.address,
// email: newContact.email