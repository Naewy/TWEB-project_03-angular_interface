(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('state-manager')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		let baseUrl = 'http://localhost:8080/api/services';

		function fetchData() {
			return $http.get(baseUrl);
		}

		return {
			fetchData: fetchData
		};
	}
})();
