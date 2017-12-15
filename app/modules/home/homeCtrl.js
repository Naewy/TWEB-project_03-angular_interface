(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('state-manager')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "State Manager";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		vm.statusAll = "All Systems Operational";
		vm.lastUpdated = "Updated a few seconds ago";

		homeService.fetchData()
			.then(function(response) {
				vm.greeting = response.data;
			});
	}
})();
