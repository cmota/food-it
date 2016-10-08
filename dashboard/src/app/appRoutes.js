(function () {
	'use strict';
	angular.module('app')
		.config(function($stateProvider) {
			$stateProvider.state({
				abstract:true,
				name: 'main',
				url: '',
				template: `<ui-view></ui-view>`
			});
	});

})();
