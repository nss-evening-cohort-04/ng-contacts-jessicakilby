"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
	if(AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

contact.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	$rootScope.$on("$routeChangeStart", function(event, currRoute, prevRoute){

		let logged = AuthFactory.isAuthenticated();
		let appTo;

		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf("/auth") !== -1;
		}

		if(!appTo && !logged) {
			event.preventDefault();
			$location.path("/auth");
		}

	});

});

contact.config(function($routeProvider){
	$routeProvider
		.when("/auth", {
			templateUrl: "partials/auth.html",
			controller: "AuthCtrl"
		})
		.when("/contacts/list", {
			templateUrl: "partials/contact-list.html",
			controller: "ContactListCtrl",
			resolve: {isAuth} 
		})
		.when("/contacts/add", {
			templateUrl: "partials/contact-add.html",
			controller: "ContactAddCtrl",
			resolve: {isAuth} 
		})
		.when("/contacts/editView/:id", {
			templateUrl: "partials/contact-edit.html",
			controller: "ContactEditViewCtrl",
			resolve: {isAuth} 
		})
		.when("/contacts/edit/:id", {
			templateUrl: "partials/contact-add.html",
			controller: "ContactEditCtrl",
			resolve: {isAuth} 
		})
		.when("/logout", {
			templateUrl: "partials/auth.html",
			controller: "AuthCtrl",
			resolve: {isAuth}
		})
		.otherwise("/auth");
});
