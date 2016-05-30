(function () {
	var app = angular.module('manual', []);

	app.controller('MyCtrl', function ($scope) {

		$scope.multiplicarValor = function(entrada) {
			$scope.valor = entrada * 2;
		};
	});



})();