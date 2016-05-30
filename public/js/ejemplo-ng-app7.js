(function () {
	var app = angular.module('manual', []);

	app.controller('TabsController', function () {
		this.tab = 1;

		this.selectTab = function (tab) {
			this.tab = tab;
		};

	});

})();