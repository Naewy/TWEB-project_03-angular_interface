(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:administrationTest
	 * @description
	 * # administrationTest
	 * Test of the app
	 */

	describe('administration test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('state-manager');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AdministrationCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
