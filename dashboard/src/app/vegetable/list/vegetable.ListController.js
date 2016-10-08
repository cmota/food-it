(function () {
    'use strict';
    angular.module('vegetable')
        .controller('vegetable.ListController',ListController);
    ListController.$inject=['vegetables',"myVegetables","$mdDialog"];
    function ListController( vegetables , myVegetables , $mdDialog) {
        let vm=this;
        vm.myVegetables=myVegetables;

        vm.add = add;

        function add($event) {
            $mdDialog.show({
                parent: angular.element(document.body),
                targetEvent: $event,
                templateUrl: "app/vegetable/add/vegetable.add.html",
                controller: "vegetable.AddController",
                controllerAs: "vm",
                locals: {
                    vegetables: vegetables
                },
            })
        }
    }

})();
