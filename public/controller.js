angular.module('toshibaApp')
	.controller('ToshibaCtrl', function ($scope, ToshibaService) {
		$scope.name = {
			valor: 'Toshiba'
		};

		$scope.setTopics = function(topicsArray){
			$scope.topics = topicsArray;
		}

		var getTopicsPromisse = ToshibaService.getTopics();

		getTopicsPromisse.then(function(json) {
			$scope.setTopics(json.data);
		}, function(err) {
			console.log(err);
		});
	});