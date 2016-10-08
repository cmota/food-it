(function () {
	'use strict';

	angular.module('vegetable')
		.config(function($stateProvider) {
			let parent = 'vegetable';

			$stateProvider.state({
				abstract:true,
				parent: 'main',
				name: 'vegetable',
				url: '',
				template: '<ui-view></ui-view>',
				resolve:{
					vegetables:["VegetableService",
								 VegetableService => VegetableService.getAll()
					]
				}
			}).state({
				parent,
				name: 'list',

				url:'',
				views:{
					"":{
						template	: '{{vm.myVegetables}}',
						controller	:'vegetable.ListController',
						controllerAs:'vm',
					}
				},

				resolve:{
					myVegetables:["VegetableService","vegetables",
								(VegetableService,vegetables) =>
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
