'use strict';

angular.module('doorbellApp')
<<<<<<< HEAD

	.controller('SubscriptionCtrl', function($scope , $firebase , $cookies , $cookieStore) {
=======
	.controller('SubscriptionCtrl', function($scope , $firebase) {



>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763

	var API_KEY = 'AIzaSyA4a5_4KBa2D4MbAOzt0onlDTFrvbzXM0M';
	var PUSH_SERVER_URL = 'https://console.developers.google.com/project/doorbell-984';

	//get cookie and encode it 
        var cookieTest = $cookieStore.get('currentUser');
        console.log(encodeURIComponent(cookieTest).replace('.', '%2E'));

        console.log(cookieTest);

	$scope.checkSubscribe = function(e) {
		console.log("subscribe");
			 
		subscribeDevice();
	}

	$scope.checkUnsubscribe = function(e) {
		//changesubscrib();
		console.log("un");
		//unsubscribeDevice();
	}

		// Check service workers are supported
		if (!('serviceWorker' in navigator)) {
			showError('Ooops No Service Worker found', 'This is most likely down ' +
					'to the site being run in a browser without service worker support. ' +
					'Make sure you are in Chrome M40 above (See chrome://version).');
			return;
			}
			console.log("check if service worker supported ");

		navigator.serviceWorker.register('/app/subscription/serviceworker.js', {
				scope: '/app/subscription/'
		}).then(function(serviceWorkerRegistration) {
		// Check if this service worker supports push
			if (!serviceWorkerRegistration.pushManager) {
				showError('Ooops Push Isn\'t Supported', 'This is most likely ' +
						'down to the current browser doesn\'t have support for push. ' +
						'Try Chrome M41.');
				return;
<<<<<<< HEAD
 
=======
>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763
			}
			});

	// Register the Service Worker
	navigator.serviceWorker.register('/app/subscription/serviceworker.js', {
				scope: '/app/subscription/'
	})
		.then(function(registration) {
		// Registration worked :)
		console.log('registration = ', registration);
		})
		.catch(function(err) {
		// Registration failed :(
		showError('Ooops a Service Worker Error', 'Whilst registering the  ' +
					'service worker, something caused an error and resulting in the ' +
					'service worker not getting installed. #NeedsABugFix.');
		});



	// Register the Service Worker
	navigator.serviceWorker.register('/app/subscription/serviceworker.js', {
				scope: '/app/subscription/'
	})
		.then(function(registration) {
		// Registration worked :)
		console.log('registration = ', registration);
		})
		.catch(function(err) {
		// Registration failed :(
		showError('Ooops a Service Worker Error', 'Whilst registering the  ' +
					'service worker, something caused an error and resulting in the ' +
					'service worker not getting installed. #NeedsABugFix.');
		});


		function subscribeDevice() {
			console.log(" subscribeDevice");
			requestNotificationPermission();
			requestPushPermission();		
		}
<<<<<<< HEAD
 
 
 
 // if ('serviceWorker' in navigator) {

 //    console.log(navigator.serviceWorker.controller);
 //    navigator.serviceWorker.register('http://localhost:9000/app/subscription/service-worker.js', {
 //      scope: './app/'
 //    })
 //    .then(initialiseState);
 //  } else {
 //    // Service Workers aren't supported so you should hide the push UI
 //    // If it's currently visible.
 //   console.log('service worker not supported');
     
 //  } 
 

					// if ('serviceWorker' in navigator){
					// console.log("SW present !!! ");

					// navigator.serviceWorker.register('service-worker.js', {
					//   scope: './'
					// }).then(function(registration){
					//   console.log('Service worker registered : ', registration.scope);
					//   console.log(navigator.serviceWorker.controller);
					// })
					// .catch(function(err){
					//   console.log("Service worker registration failed : ", err);
					// });

					// }

   
=======
>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763


		function showError(title, message) {
			var buttonContainer = document.querySelector('.button-container');
			buttonContainer.style.display = 'none';

			var errorContainer = document.querySelector('.error-container');
			var titleElement = errorContainer.querySelector('.title');
			var messageElement = errorContainer.querySelector('.message');
			titleElement.innerHTML = title;
			messageElement.innerHTML = message;
			errorContainer.style.display = 'block';
		}
			

	 	//check if notification are supported or not 
		function requestNotificationPermission() {
			console.log("1) requestNotificationPermission");
			if (!Notification) {
			showError('Ooops Notifications Not Supported');
			return;
			}
		}
<<<<<<< HEAD
 
=======


>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763

		function requestPushPermission() {
			console.log("2) request push permission");
			navigator.serviceWorker.register('/app/subscription/serviceworker.js', {
			scope: '/app/subscription/'
			}).then(function(serviceWorkerRegistration) {
			serviceWorkerRegistration.pushManager.subscribe()
			.then(function(pushSubscription) {
			sendSubscription(pushSubscription);
			})
		.catch(function(e) {
			console.error('Unable to register for push', e);
			showError('Ooops Push Couldn\'t Register', 'When we tried to ' +
			'get the registration ID for GCM, something went wrong, not ' +
			'sure why. Check the console to see the error.');
		});
		});
	}


 	function sendSubscription(subscriptionObject) {
		console.log(" 3)send subscription function");
		var endpoint = subscriptionObject.endpoint;
		var subscriptionId = subscriptionObject.subscriptionId;
		console.log('sendRegistration endpoint = ', endpoint);
		console.log('sendRegistration subscriptionId = ', subscriptionId);
		var formData = new FormData();
		formData.append('registration', subscriptionId);
		formData.append('endpoint', endpoint);
		console.log("continue");
<<<<<<< HEAD
//add token to employee info on firebase DB 
            var ref = new Firebase("https://doorbellyamsafer.firebaseio.com//EMPLOYEE/");
            var tokenUpdate = ref.child(encodeURIComponent(cookieTest).replace('.', '%2E')).update({
                token: subscriptionId
                
		
	});
}
=======
	$scope.ref = new Firebase("https://doorbellyamsafer.firebaseio.com/emplyee");
	$scope.add = function() {
	$scope.ref.set({
			token: subscriptionId

		});
	};
		// SAVE FIREBASE
	}
>>>>>>> c5f388da45ccb059d5090732986fe2a2b53d1763

	});