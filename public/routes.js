angular.module('toshibaApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/clientes', {
				templateUrl: 'public/html/clientes.html',
				controller: 'ToshibaCtrl' 
			})
			.when('/transacao', {
				templateUrl: 'public/html/transacao.html',
				controller: 'ToshibaCtrl' 
			})
			.when('/topics', {
				templateUrl: 'public/html/topics.html',
				controller: 'ToshibaCtrl' 
			});
			
	}]);