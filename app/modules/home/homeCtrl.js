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

	Home.$inject = ['homeService', '$interval'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $interval) {
		/*jshint validthis: true */
		var vm = this;
		vm.updateDataFrequency = 5000;
		vm.updateTimerFrequency = 1000;
		vm.title = "State Manager";
		vm.version = "1.0.0";
		vm.lastUpdated = 0;
		vm.daysSinceLastIncident = "-";
		vm.services = [
			{
				"self":"https://docs.angularjs.org/api/ng/directive/ngRepeat",
				"name":"MySQL",
				"state":"up",
				"statusAddress":"https://docs.angularjs.org/api/ng/directive/ngRepeat/234",
				"description":"MySQL database",
				"contact":"Matthieu Chatelan"
			},
			{
				"self":"https://docs.angularjs.org/api/ng/directive/ngRepeat/234",
				"name":"SSH",
				"state":"up",
				"statusAddress":"https://docs.angularjs.org/api/ng/directive/ngRepeatasdsda",
				"description":"Lol SSH ",
				"contact":"Alain Hardy"
			}
		];

		// Function used to get new data and update the page (automatically)
		let updateData = () => {
			homeService.fetchData()
			.then(function(response) {
				vm.greeting = response.data;
				// vm.services = response.data;

				vm.activeMaintenances = vm.services.filter((item) => {return item.state === "maintenance"}).length;
				vm.downService = vm.services.filter((item) => {return item.state === "down"}).length;

				vm.statusAll = !(vm.activeMaintenances || vm.downService);
				vm.statusAll = vm.statusAll ? "all_good" : "all_error";

				console.log("Data fetched");
				vm.lastUpdated = 0;
			});
		};

		// First call to display data before interval kicks in
		updateData();

		// Update the page with the latest info every "updateDataFrequency" ms
		$interval(updateData, vm.updateDataFrequency);

		// Update the page timer until reset when new data are fetched
		$interval(() => {
				vm.lastUpdated = vm.lastUpdated + (vm.updateTimerFrequency / 1000) < (vm.updateDataFrequency / 1000) ? vm.lastUpdated + (vm.updateTimerFrequency / 1000) : vm.lastUpdated = 0;
				console.log(vm.lastUpdated);
			}, vm.updateTimerFrequency);
	}



})();
