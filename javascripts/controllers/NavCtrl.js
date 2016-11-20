"use strict";

contact.controller("NavCtrl", function($scope){

	$scope.navLinks = [
		{
			title:"Logout",
			url:"#/logout"
		},
		{
			title:"Add New Contact",
			url:"#/contacts/add"	
		},
		{
			title:"View All Contacts",
			url:"#/contacts/list"
		}
	];
	
});
