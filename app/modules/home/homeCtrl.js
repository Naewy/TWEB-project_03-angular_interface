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
		vm.statusAll = "All Systems Operational";
		vm.lastUpdated = 23;
		vm.daysSinceLastIncident = 0;
		vm.activeMaintenances = 12;
		vm.activeIncidents = 44;
		vm.services = [
			{
				"self":"https://docs.angularjs.org/api/ng/directive/ngRepeat",
				"name":"MySQL",
				"state":"Operational",
				"statusAddress":"https://docs.angularjs.org/api/ng/directive/ngRepeat/234",
				"description":"MySQL database",
				"contact":"Matthieu Chatelan"
			},
			{
				"self":"https://docs.angularjs.org/api/ng/directive/ngRepeat/234",
				"name":"SSH",
				"state":"Operational",
				"statusAddress":"https://docs.angularjs.org/api/ng/directive/ngRepeatasdsda",
				"description":"Lol SSH ",
				"contact":"Alain Hardy"
			}
		];

		homeService.fetchData()
			.then(function(response) {
				vm.greeting = response.data;
				// vm.services = response.data;
			});
	}



})();
