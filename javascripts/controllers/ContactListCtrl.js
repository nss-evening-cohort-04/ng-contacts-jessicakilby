"use strict";

contact.controller("ContactListCtrl", function($scope, contactFactory){

	$scope.contacts = [];

	var getContacts = function(){
		contactFactory.getContactFB().then(function(contactsFB){
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
});