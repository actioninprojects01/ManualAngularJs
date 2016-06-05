
(function () {
	var app = angular.module('manual', []);

	app.controller('MyCtrl', function ($scope) {

        $scope.visible = true;
        $scope.toggle = function() {
        $scope.visible = !$scope.visible;
    };

	});
    
    app.controller('MyCtrl2', function ($scope) {

        $scope.visible = true;
        $scope.toggle = function() {
            $scope.visible = !$scope.visible;
        };
    });

})();