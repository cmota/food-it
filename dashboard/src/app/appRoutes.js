(function () {
	'use strict';
	angular.module('app').config(function($stateProvider) {
		$stateProvider.state({
			name: 'main',
			url: '/',
			abstract:true,
			template: `<ui-view></ui-view><ui-view name="modalView"></ui-view>`
		});
	});

})();
