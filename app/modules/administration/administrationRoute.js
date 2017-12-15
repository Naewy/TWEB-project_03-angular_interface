'use strict';

/**
 * @ngdoc function
 * @name app.route:administrationRoute
 * @description
 * # administrationRoute
 * Route of the app
 */

angular.module('administration')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.administration', {
				url:'/administration',
				templateUrl: 'app/modules/administration/administration.html',
				controller: 'AdministrationCtrl',
				controllerAs: 'vm'
			});

		
	}]);
