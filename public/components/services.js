(function() {
	'use strict';

	angular.module('sandbox.services', [])

	.factory('Ping', ['$http', function($http) {

		function pingServer() {
			return $http.get('/api/ping');
		}

		return {
			pingServer: pingServer
		};

	}]);

})();