"use strict";

contact.controller("ContactListCtrl", function($scope, $rootScope, contactFactory){

	$scope.contacts = [];

	var getContacts = function(){
		contactFactory.getContactFB($rootScope.user.uid).then(function(contactsFB){
			console.log("contacts from fb", contactsFB);
			$scope.contacts = contactsFB;
		});
	};
	getContacts();

	$scope.deleteContact = function(contactId){
		console.log("delete contact", contactId);
		contactFactory.deleteContactsFB(contactId).then(function(response){
			getContacts();
		});
	};

	$scope.inputChange = function(watchamacalit){
		contactFactory.editContact(watchamacalit).then(function(response){

		});
	};

});