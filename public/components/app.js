(function() {
	'use strict';

	angular.module('sandbox', [
		'ui.router',
		'ui.bootstrap',

		'sandbox.main',
		'sandbox.services'
	])

	.config(['$urlRouterProvider', function($urlRouterProvider) {

		$urlRouterProvider
		.when('', '/main')
		.otherwise('/main');

	}]);

})();