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
		vm.updateDataFrequency = 10000;
		vm.updateTimerFrequency = 1000;
		vm.title = "State Manager";
		vm.version = "1.0.0";
		vm.lastUpdated = 0;
		vm.daysSinceLastIncident = "-";
		vm.accumulator = 0;
	/*	vm.services = [
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
		];*/

		// Function used to get new data and update the page (automatically)
		let updateData = () => {
			homeService.fetchData()
			.then(function(response) {
				vm.services = response.data;

				vm.activeMaintenances = vm.services.filter((item) => {return item.state === "maintenance"}).length;
				vm.downService = vm.services.filter((item) => {return item.state === "down"}).length;
				vm.upService = vm.services.filter((item) => {return item.state === "up"}).length;

				vm.statusAll = !(vm.activeMaintenances || vm.downService);
				vm.statusAll = vm.statusAll ? "all_good" : "all_error";

				console.log("Data fetched");
				vm.lastUpdated = 0;
			}, function(error) {
				vm.statusAll = "all_error_api";
				vm.activeMaintenances = "-";
				vm.downService = "-";
				vm.upService = "-";
			});
		};

		// First call to display data before interval kicks in
		updateData();

		// Update the page and refresh the information if needed
		$interval(() => {
			vm.lastUpdated += 1;
			if(vm.lastUpdated >= vm.updateDataFrequency / 1000) {
				updateData();
			}
		}, vm.updateTimerFrequency);
	}
})();
