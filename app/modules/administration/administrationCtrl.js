(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:administrationCtrl
	* @description
	* # administrationCtrl
	* Controller of the app
	*/

  	angular
		.module('administration')
		.controller('AdministrationCtrl', Administration);

		Administration.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Administration() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
