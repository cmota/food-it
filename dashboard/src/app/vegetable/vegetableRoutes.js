(function () {
	'use strict';

	angular.module('vegetable')
		.config(function($stateProvider) {
			let parent = 'main.vegetable';

			$stateProvider.state({
				abstract:true,
				name: 'main.vegetable',
				url: '',
				template: '<ui-view></ui-view>',
				resolve:{
					vegetables:["VegetableService",
								 VegetableService => VegetableService.getAll()
					]
				}
			}).state({
				name: `${parent}.list`,
				url:'',
				templateUrl	: 'app/vegetable/list/vegetable.list.html',
				controller	: 'vegetable.ListController',
				controllerAs: 'vm',
				resolve:{
					myVegetables:["VegetableService","vegetables",
								(  VegetableService , vegetables ) =>
									VegetableService.getMine()
										.then(myVegetables=>
											myVegetables.map(veg =>{
												veg.name=vegetables.find(vegetable=>vegetable.id===veg.vegetal_id).name;
												return veg;
											})
										)
					]
				}
			});
		});

})();
