(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:administrationService
	 * @description
	 * # administrationService
	 * Service of the app
	 */

  	angular
		.module('administration')
		.factory('AdministrationService', Administration);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Administration.$inject = ['$http'];

		function Administration ($http) {

		}

})();
