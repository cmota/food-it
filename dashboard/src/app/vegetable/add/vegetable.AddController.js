(function () {
    'use strict';
    angular.module('vegetable')
        .controller('vegetable.AddController',AddController);
    AddController.$inject=["vegetables"];
    function AddController(vegetables) {
        let vm=this;
        vm.vegetables=vegetables;
    }

})();
