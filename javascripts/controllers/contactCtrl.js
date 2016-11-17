"use strict";

contact.controller("contactCtrl", function($scope, contactFactory){

	$scope.showListView = true;
	$scope.newContact = {};
	$scope.contacts = [];

	var getContacts = function(){
		contactFactory.getContactFB().then(function(contactsFB){
			console.log("contacts from fb", contactsFB);
			$scope.contacts = contactsFB;
		});
	};
	getContacts();

	$scope.allContactView = function(){
		$scope.showListView = true;
	};
	$scope.addContactView = function(){
		$scope.showListView = false;
	};
	$scope.submitNewContact = function(){
		contactFactory.postContacts($scope.newContact).then(function(){
			getContacts();
			$scope.newContact = {};
			$scope.showListView = true;
		});
	};
	$scope.editContacts = function(){
		console.log("edit button linked");
	};
	$scope.deleteContacts = function(){
		console.log("delete button linked");
		contactFactory.deleteContactsFB().then(function(contactsFB){
			console.log("new contacts from fb", contactsFB);
			$scope.contacts = contactsFB;
		});
	};

});

// main html view, where you can see contacts, needs ng-controller="contactCtrl"
//The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

//name: newContact.name,
// phone: newContact.phone,
// address: newContact.address,
// email: newContact.email