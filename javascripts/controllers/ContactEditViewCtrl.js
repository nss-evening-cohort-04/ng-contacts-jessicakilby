"use strict";

contact.controller("ContactEditViewCtrl", function($scope, $routeParams, contactFactory){
	$scope.selectedContact = {};
	let contactId = $routeParams.id;

	contactFactory.getSingleContact(contactId).then(function(singleContact){
		singleContact.id = contactId;
		console.log("ContactEditViewCtrl contactId", contactId);
		$scope.selectedContact = singleContact;
	});
});

// $routeParams