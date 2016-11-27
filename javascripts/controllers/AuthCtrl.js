"use strict";

contact.controller("AuthCtrl", function($scope, $location, $rootScope, AuthFactory, UserFactory){

	$scope.loginArea = true; //ng-show="loginArea" in auth.html
	$scope.registerArea = false; //ng-show="registerArea" in auth.html

	//$location>>>find in url ending in "",clear old user and take them to login
	if($location.path() === "/logout"){ 
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url("/auth");
	}

	var logUserIn = function(loginInfo){
		AuthFactory.authenticate(loginInfo).then(function(loggedIn){
			console.log("did login", loggedIn);
			return UserFactory.getUserFB(loggedIn.uid);
		}).then(function(userCredentials){
			$rootScope.user = userCredentials;
			$scope.login = {};
			$scope.register = {};
			$location.url("/contacts/list");
		});
	};

	$scope.setLoginArea = function(){
		$scope.loginArea = true;
		$scope.registerArea = false;
	};
	$scope.setRegisterArea = function(){
		$scope.loginArea = false;
		$scope.registerArea = true;
	};
	$scope.registerNewUser = function(registerUser){
		AuthFactory.registrationEmail(registerUser).then(function(didRegister){
			registerUser.uid = didRegister.uid;
			return UserFactory.postUserFB(registerUser);
		}).then(function(completeRegistration){
			logUserIn(registerUser);
		});
	};
	$scope.loginOldUser = function(loginUser){
		logUserIn(loginUser);
	};

});
	