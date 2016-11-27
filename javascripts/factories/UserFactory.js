"use strict";

contact.factory("UserFactory", function($q, $http, FIREBASE_CONFIG){

	var getUserFB = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}`)
			.success(function(response){
				let users = [];
				Object.keys(response).forEach(function(key){
					users.push(response[key]);
				});
				resolve(users[0]);
			}).error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postUserFB = function(authData){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, JSON.stringify({
				uid: authData.uid,
				username: authData.username
				})
			).success(function(postResponse){
				resolve(postResponse);
			}).error(function(postError){
				reject(postError);
			});
		});
	};


	return {
		getUserFB: getUserFB, 
		postUserFB: postUserFB
	};
});