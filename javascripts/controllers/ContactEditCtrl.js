"use strict";

contact.controller("ContactEditCtrl", function($scope, $routeParams, $location, contactFactory){
	$scope.newContact = {};
	let ContactId = $routeParams.id;

	contactFactory.getSingleContact(ContactId).then(function(oneContact){
		oneContact.id = ContactId;
		$scope.newContact = oneContact;
	});
	$scope.submitNewContact = function(){
		contactFactory.editContact($scope.newContact).then(function(response){
			$scope.newContact = {};
			$location.url("/contacts/list");
		});
	};
});