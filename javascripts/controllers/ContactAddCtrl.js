"use strict";

contact.controller("ContactAddCtrl", function($scope,$location, contactFactory){

	$scope.newContact = {};

	$scope.submitNewContact = function(){
		contactFactory.postContacts($scope.newContact).then(function(contactId){
			$location.url("/contacts/list");
			$scope.newContact = {};
		});
	};
});	

//$location will find ng-view in html
//ng-click="submitNewContact()" in partials/contact-add.html
