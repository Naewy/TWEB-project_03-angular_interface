(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('state-manager', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngMessages',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();
