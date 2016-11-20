"use strict";

contact.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

contact.config(function($routeProvider){
	$routeProvider
		.when('/contacts/list', {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl"
		})
		.when('/contacts/add', {
			templateUrl: "partials/contact-add.html",
			controller: "ContactAddCtrl"
		})
		.when('/contacts/editView/:id', {
			templateUrl: "partials/contact-edit.html",
			controller: "ContactEditViewCtrl"
		})
		.when("/contacts/edit/:id", {
			templateUrl: "partials/contact-add.html",
			controller: "ContactEditCtrl"
		})
		.otherwise('/contacts/list');
});
