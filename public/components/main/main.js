(function() {
	'use strict';

	angular.module('sandbox.main', [])

	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'components/main/main.tpl.html',
			controller: 'Main'
		});
	}])

	.controller('Main', ['$scope', 'Ping', 
		function($scope, Ping) {

			$scope.message = "What's up Michael Bashour?";
			$scope.pingServer = pingServer;

			function pingServer() {
				Ping.pingServer()
				.then(function(res) {
					var response = "The server says:" + res.data.message
					$scope.message += response;
				});
			}

		}
	]);
})();