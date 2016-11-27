"use strict";

contact.factory("contactFactory", function($q, $http, FIREBASE_CONFIG){

	var getContactFB = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userId}`)
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
				email: newContact.email,
				uid: newContact.uid
				})
			).success(function(postResponse){
				resolve(postResponse);
			}).error(function(postError){
				reject(postError);
			});
		});
	};

	var deleteContactsFB = function(contactId){
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			}).error(function(deleteError){
				reject(deleteError);
			});
		});
	};

	var getSingleContact = function(contactId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
			.success(function(singleResponse){
				resolve(singleResponse);
			}).error(function(singleError){
				reject(singleError);
			});
		});
	};

	var editContact = function(editContact){
		return $q((resolve, reject)=>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editContact.id}.json`, JSON.stringify({
				name: editContact.name,
				phone: editContact.phone,
				address: editContact.address,
				email: editContact.email,
				uid: editContact.uid
				})
			).success(function(editResponse){
				resolve(editResponse);
			}).error(function(editError){
				reject(editError);
			});
		});
	};

	return {
		getContactFB: getContactFB, 
		postContacts: postContacts, 
		deleteContactsFB: deleteContactsFB,
		getSingleContact: getSingleContact,
		editContact: editContact
	};
});

//Factory: ability to use other services (have dependencies), service initialization, delayed/lazy initialization
//$q:A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done 
//$q instead of promise
//$http instead of ajax request
//.success instead of .then
