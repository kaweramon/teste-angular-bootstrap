angular.module('toshibaApp')
	.service('ToshibaService', ['$http', function($http) {
		return {
			getTopics: function() {
				return $http({
					method: 'GET',
					url: 'http://localhost:8000/topics'
				});
			}
		}
	}]);