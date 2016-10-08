(function () {
    'use strict';
    angular.module('vegetable')
        .controller('vegetable.ListController',ListController);
    ListController.$inject=["myVegetables"];
    function ListController(myVegetables) {
        let vm=this;
        vm.myVegetables=myVegetables;
    }

})();
