"use strict";

contact.factory("contactFactory", function($q, $http, FIREBASE_CONFIG){

	var getContactFB = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(response){
				let contacts = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					contacts.push(response[key]);
				});
				resolve(contacts);
			}).error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postContacts = function(newContact){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify({
				name: newContact.name,
				phone: newContact.phone,
				address: newContact.address,
				email: newContact.email
				})
			).success(function(postResponse){
				resolve(postResponse);
			}).error(function(postError){
				reject(postError);
			});
		});
	};

	var deleteContactsFB = function(){
		console.log("delete button working");
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			}).error(function(deleteError){
				reject(deleteError);
			});
		});
	};

	

	return {getContactFB:getContactFB, postContacts, deleteContactsFB};
});

//Factory: ability to use other services (have dependencies), service initialization, delayed/lazy initialization
//$q:A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done 
//$q instead of promise
//$http instead of ajax request
//.success instead of .then

// 	return new Promise((resolve, reject)=>{
	// 		$.ajax({
	// 			method: 'GET',
	// 			url: `${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`
	// 		}).then((response)=>{
	// 			let items = [];
	// 			Object.keys(response).forEach(function(key){
	// 				response[key].id = key;
	// 				items.push(response[key]);
	// 			});

	// 			resolve(items);
	// 		}, (error)=>{
	// 			reject(error);
	// 		});
	// 	});
	// };